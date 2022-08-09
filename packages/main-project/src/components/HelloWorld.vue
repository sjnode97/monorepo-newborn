<template>
  <Charts :myOption="obj"/>
  <VueDraggableNext />
  <el-button @click="clickData">点击我</el-button>
</template>



<script setup lang="ts">
import { reactive, toRefs, onMounted, ref } from 'vue'
import  {VueDraggableNext ,Charts} from "@newborn/components"
defineProps<{ msg: string }>()
let drag = ref(false)
let myArray = ref([1, 2, 3, 4, 5, 6])
let clickData = () => {
  console.log(myArray)
}
const obj = ref<object>({});
const name = ref<string>("");
fetch('https://24h-aqi-list.vercel.app/api').then(data => {
  return data.json()
}).then(data => {
  let xData = data[0][1].map((item: { area: any }) => item.area)
  let sData = data[0][1].map((item: { aqi: any }) => item.aqi)
  console.log(xData,sData)
  obj.value =  {
    // backgroundColor: '#080b30',
    title: {
      text: '全国天气',
      textStyle: {
        align: 'center',
        color: '#fff',
        fontSize: 20,
      },
      top: '5%',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '14%',
      top:'16%',
      containLabel: true
    },
    legend: {
      data: ['空气质量指数'],
      right: 10,
      top:12,
      textStyle: {
        color: "#fff"
      },
      itemWidth: 12,
      itemHeight: 10,
      // itemGap: 35
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLine: {
        lineStyle: {
          color: 'white'

        }
      },
      axisLabel: {
        // interval: 0,
        // rotate: 40,
        textStyle: {
          fontFamily: 'Microsoft YaHei'
        }
      },
    },

    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'white'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)'
        }
      },
      axisLabel: {}
    },
    "dataZoom": [{
      "show": true,
      "height": 12,
      "xAxisIndex": [
        0
      ],
      bottom:'8%',
      "start": 0,
      "end": 60,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle:{
        color:"#d3dee5",

      },
      textStyle:{
        color:"#fff"
      },
      borderColor:"#90979c"
    }, {
      "type": "inside",
      "show": true,
      "height": 15,
      "start": 1,
      "end": 35
    }],
    series: [{
      name: '空气质量指数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: { color: '#f5804d'},
      },
      data:sData
    },
    ]
  };
  name.value = 'll'
})
</script>

<style scoped>
.item{
  margin-top: 20px;
  color: #ffffff;
  width: 100px;
  height: 30px;
  background: #00B7FF;
}
</style>
