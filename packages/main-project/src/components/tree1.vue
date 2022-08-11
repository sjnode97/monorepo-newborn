<template>
  <MyTree/>
  <div ref="tree"></div>
</template>

<script setup lang="ts">
import  {MyTree, Charts} from "@newborn/components"
import {onMounted, ref} from "vue";

let tree = ref()
var o = [
  {
    name: '我是一级',
    children: [
        {name: '我是1.1'}
    ]
  },
  {
    name: '我是二级',
    children: [
      {name: '我2.1'},
      {name: '我2.2',children: [{name: '我是2.2.1'}] }
    ]
  },
]

</script>

<style scoped>

</style>
