

function observe(param, b) {

}

function initComputed(vm, computed) {

}

function initWatch(vm, watch) {

}

/**
 * 两件事：
 *   数据响应式的入口：分别处理 props、methods、data、computed、watch
 *   优先级：props、methods、data、computed 对象中的属性不能出现重复，优先级和列出顺序一致
 *         其中 computed 中的 key 不能和 props、data 中的 key 重复，methods 不影响
 */
export function initState (vm) {
    vm._watchers = []
    const opts = vm.$options
    // 处理 props 对象，为 props 对象的每个属性设置响应式，并将其代理到 vm 实例上
    if (opts.props) initProps(vm, opts.props)
    // 处理 methos 对象，校验每个属性的值是否为函数、和 props 属性比对进行判重处理，最后得到 vm[key] = methods[key]
    if (opts.methods) initMethods(vm, opts.methods)
    /**
     * 做了三件事
     *   1、判重处理，data 对象上的属性不能和 props、methods 对象上的属性相同
     *   2、代理 data 对象上的属性到 vm 实例
     *   3、为 data 对象的上数据设置响应式
     */
    if (opts.data) {
        initData(vm)
    } else {
        observe(vm._data = {}, true /* asRootData */)
    }
    /**
     * 三件事：
     *   1、为 computed[key] 创建 watcher 实例，默认是懒执行
     *   2、代理 computed[key] 到 vm 实例
     *   3、判重，computed 中的 key 不能和 data、props 中的属性重复
     */
    if (opts.computed) initComputed(vm, opts.computed)
    /**
     * 三件事：
     *   1、处理 watch 对象
     *   2、为 每个 watch.key 创建 watcher 实例，key 和 watcher 实例可能是 一对多 的关系
     *   3、如果设置了 immediate，则立即执行 回调函数
     */
    let nativeWatch;
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch)
    }

    /**
     * 其实到这里也能看出，computed 和 watch 在本质是没有区别的，都是通过 watcher 去实现的响应式
     * 非要说有区别，那也只是在使用方式上的区别，简单来说：
     *   1、watch：适用于当数据变化时执行异步或者开销较大的操作时使用，即需要长时间等待的操作可以放在 watch 中
     *   2、computed：其中可以使用异步方法，但是没有任何意义。所以 computed 更适合做一些同步计算
     */
}
// 处理 props 对象，为 props 对象的每个属性设置响应式，并将其代理到 vm 实例上
function initProps (vm, propsOptions) { //vm: Component, propsOptions: Object
    const propsData = vm.$options.propsData || {}
    const props = vm._props = {}
    // 缓存 props 的每个 key，性能优化
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    const keys = vm.$options._propKeys = []
    const isRoot = !vm.$parent
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false)
    }
    // 遍历 props 对象
    for (const key in propsOptions) {
        // 缓存 key
        keys.push(key)
        // 获取 props[key] 的默认值
        const value = validateProp(key, propsOptions, propsData, vm)
        // 为 props 的每个 key 是设置数据响应式
        defineReactive(props, key, value)
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            // 代理 key 到 vm 对象上
            proxy(vm, `_props`, key)
        }
    }
    toggleObserving(true)
}

// 设置代理，将 key 代理到 target 上
export function proxy (target, sourceKey, key) { //target: Object, sourceKey: string, key: string
    sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}


/**
 * 做了以下三件事，其实最关键的就是第三件事情
 *   1、校验 methods[key]，必须是一个函数
 *   2、判重
 *         methods 中的 key 不能和 props 中的 key 相同
 *         methos 中的 key 与 Vue 实例上已有的方法重叠，一般是一些内置方法，比如以 $ 和 _ 开头的方法
 *   3、将 methods[key] 放到 vm 实例上，得到 vm[key] = methods[key]
 */
function initMethods (vm, methods) {
    // 获取 props 配置项
    const props = vm.$options.props
    // 遍历 methods 对象
    for (const key in methods) {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof methods[key] !== 'function') {
                warn(
                    `Method "${key}" has type "${typeof methods[key]}" in the component definition. ` +
                    `Did you reference the function correctly?`,
                    vm
                )
            }
            if (props && hasOwn(props, key)) {
                warn(
                    `Method "${key}" has already been defined as a prop.`,
                    vm
                )
            }
            if ((key in vm) && isReserved(key)) {
                warn(
                    `Method "${key}" conflicts with an existing Vue instance method. ` +
                    `Avoid defining component methods that start with _ or $.`
                )
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
    }
}

/**
 * 做了三件事
 *   1、判重处理，data 对象上的属性不能和 props、methods 对象上的属性相同
 *   2、代理 data 对象上的属性到 vm 实例
 *   3、为 data 对象的上数据设置响应式
 */
function initData (vm) {
    // 得到 data 对象
    let data = vm.$options.data
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {}
    if (!isPlainObject(data)) {
        data = {}
        process.env.NODE_ENV !== 'production' && warn(
            'data functions should return an object:\n' +
            'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
            vm
        )
    }
    /**
     * 两件事
     *   1、判重处理，data 对象上的属性不能和 props、methods 对象上的属性相同
     *   2、代理 data 对象上的属性到 vm 实例
     */
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (process.env.NODE_ENV !== 'production') {
            if (methods && hasOwn(methods, key)) {
                warn(
                    `Method "${key}" has already been defined as a data property.`,
                    vm
                )
            }
        }
        if (props && hasOwn(props, key)) {
            process.env.NODE_ENV !== 'production' && warn(
                `The data property "${key}" is already declared as a prop. ` +
                `Use prop default value instead.`,
                vm
            )
        } else if (!isReserved(key)) {
            proxy(vm, `_data`, key)
        }
    }
    // 为 data 对象上的数据设置响应式
    observe(data, true /* asRootData */)
}

export function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget()
    try {
        return data.call(vm, vm)
    } catch (e) {
        handleError(e, vm, `data()`)
        return {}
    } finally {
        popTarget()
    }
}



