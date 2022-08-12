<template>
  <div class="root">
    <Vuedrag />
    <Vuedrag1 />
  </div>
</template>

<script setup lang="ts">
// import  {TestButton, MyTree, Charts} from "@newborn/components"
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Tree1 from './components/tree1.vue'
import Vuedrag from '../components/vuedraggableTest.vue'
import Vuedrag1 from '../components/vuedraggableTest1.vue'
import {ref} from "vue";
let elements = ref([
  {
    "id": 5,
    "name": "Prince Charming",
    "elements": []
  },
  {
    "id": 3,
    "name": "Donkey",
    "elements": []
  },
  {
    "id": 1,
    "name": "Shrek",
    "elements": [
      {
        "id": 4,
        "name": "Lord Farquad",
        "elements": []
      }
    ]
  },
  {
    "id": 2,
    "name": "Fiona",
    "elements": []
  }
])
</script>

<style scoped lang="less">
.root {
  display: flex;
  width: 100vw;
  overflow: hidden;
}
</style>
