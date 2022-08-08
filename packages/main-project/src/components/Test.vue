<template>
  <div>
    {{myStore.state}}
  </div>
  <button @click="myClick">djsdsd</button>
</template>

<script setup lang="ts">
// 仿造的vuex的实现原理
class Store {
  state: object;
  mutations: any;
  actions: any;
  // 持有state，并使其响应化
  constructor(options: { state: object; mutations: object; actions: object; }){
    this.state = options.state
    this.mutations = options.mutations;// mutations 对象
    this.actions = options.actions;// actions 对象
    // 绑定this
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  // 实现commit和dispatch方法
  commit(type: string, arg: any):void{
    this.mutations[type](this.state,arg);
  }
  dispatch(type: string, arg: any){
    return new Promise<void>((res,rej) => {
      res()
    }).then(res => {
      this.actions[type](this,arg)
    })
  }
}
let state:object =  {
  // a: '111',
  b: '123'
}
let mutations:object = {
  aCommit(state: object, data: any):void {
    state.a = data
  },
}
let actions = {
  kk({commit}, data) {
    commit("aCommit",data)
  }
}

let myStore = new Store({state, mutations, actions})
console.log(myStore)
let myClick = () => {
  myStore.dispatch('kk', '我变了1').then(res => {
    console.log(res)
  })
  console.log(myStore.state);
  setTimeout(() => {
    console.log(myStore.state);
  })
}

</script>

<style scoped>

</style>
