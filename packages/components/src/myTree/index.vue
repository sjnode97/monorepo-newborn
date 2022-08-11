<template>
  <el-tree :data="consttreeData" :props="defaultProps" @node-click="handleNodeClick"/>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";

interface mytree {
  id: number
  title: string
  children?: mytree[]
}
let message:Ref<string> = ref("我是message")
let consttreeData:Ref<mytree[]> = ref([
  {
    "id": 1,
    "title": "课程1",
    "children": [
      {"id": 4, "title": "课程1-1"},
      {
        "id": 5,
        "title": "课程1-2",
        "children": [
          {"id": 6, "title": "课程1-2-1"},
          {"id": 7, "title": "课程1-2-2"},
        ],
      },
    ],
  },
  {id: 2, title: "课程2"},
  {id: 3, title: "课程3"},
])

interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'title',
}
</script>

<style scoped>

</style>
