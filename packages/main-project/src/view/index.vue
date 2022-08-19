<template>
  <div class="root">
    <Vuedrag />
    <Vuedrag1 />
<!--    <div ref="chartss" style="width: 500px;height:500px"></div>-->
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
// import  {TestButton, MyTree, Charts} from "@newborn/components"
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Tree1 from './components/tree1.vue'
import Vuedrag from '../components/vuedraggableTest.vue'
import Vuedrag1 from '../components/vuedraggableTest1.vue'
import {onMounted, ref} from "vue";
let chartss = ref()
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
let option = {
  backgroundColor:'#ffffff',
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
onMounted(() => {
  let mycharts = echarts.init(chartss.value)
  mycharts.setOption(option,true)

  mycharts.on("legendselectchanged",(option)=>{
    console.log(option)
  })
})


</script>

<style scoped lang="less">
.root {
  display: flex;
  width: 100vw;
  overflow: hidden;
}
</style>
