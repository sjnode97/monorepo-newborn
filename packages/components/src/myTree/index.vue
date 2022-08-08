<template>
  <div>
    {{consttreeData}}
  </div>
</template>

<script setup lang="ts">
let consttreeData=[
  {
    id:1,
    title:"课程1",
    children:[
      {id:4,title:"课程1-1"},
      {
        id:5,
        title:"课程1-2",
        children:[
          {id:6,title:"课程1-2-1"},
          {id:7,title:"课程1-2-2"},
        ],
      },
    ],
  },
  {id:2,title:"课程2"},
  {id:3,title:"课程3"},
];
</script>

<style scoped>

</style>
