#### vue2的仓库源码管理方式

![image-20220817224228453](C:\Users\0\AppData\Roaming\Typora\typora-user-images\image-20220817224228453.png)

#### vue3的仓库源码管理方式

![image-20220817224339126](C:\Users\0\AppData\Roaming\Typora\typora-user-images\image-20220817224339126.png)

#### vue3相较于vue2的优化点![image-20220817224841500](C:\Users\0\AppData\Roaming\Typora\typora-user-images\image-20220817224841500.png)

 vue的响应式 从 defineProperty =》 转为Proxy

注意的是，Proxy API并不能监听到内部深层次的对象变化因此Vue.js 3.0的处理方式是在getter中去递归响应式

这样的好处是真正访问到的内部对象才会变成响应式，而不是无脑递归
这样无疑也在很大程度上提升了性能

#### vue的渲染流程

![image-20220817225819251](C:\Users\0\AppData\Roaming\Typora\typora-user-images\image-20220817225819251.png)

性能的优化 除了数据劫持阶段的优化 可以再耗时最多的patch阶段想办法

vue3 通过在编译阶段优化编译的结果，实现运行时patch过程的优化，通过编译阶段对静态模板的分析，编译生成了Block tree

#### Block tree

Block tree是一个将模版基于动态节点指令切割的嵌套区块，每个区块内部的节点结构是固定的每个区块只需要以一个Array来追踪自身包含的动态节点
借助Block tree，Vue.js将vnode更新性能由与模版整体大小相关提升为与动态内容的数量相关

![image-20220817230053511](C:\Users\0\AppData\Roaming\Typora\typora-user-images\image-20220817230053511.png)