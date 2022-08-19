<template>
  <div class="design">
<!--    <div class="col-3">
      <h3>Draggable 1</h3>
      <VueDraggableNext
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="log"
          :clone="cloneDog"
      >
        <div
            class="list-group-item"
            v-for="element in list1"
            :key="element.name"
        >
          {{ element.name }}
        </div>
      </VueDraggableNext>
    </div>-->

    <h3>设计区域</h3>
    <VueDraggableNext
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
        @add="addList"
    >
      <VueDragResize
          class="list-group-item"
          v-for="(element,k) in list2"
          :key="element.name"
          :w="element.w"
          :h="element.h"
          :x="element.x"
          :y="element.y"
      >
        {{element}}
        <component :is="element.componentsName" :my-option="obj" />
      </VueDragResize>
    </VueDraggableNext>

  </div>
</template>

<script setup lang="ts">
import VueDragResize from 'vue-drag-resize/src'
import { VueDraggableNext } from 'vue-draggable-next'
import { ref ,shallowRef} from "vue";

let compontentWidth = ref<number>(400),
compontentHeight = ref<number>(400),
positionX = ref<number>(0),
positionY = ref<number>(0)

let log = (evt: any) => {
  console.log(evt);
  console.log(list2);
}
let idGlobal = 8;
/*let cloneDog = ({ id }:any) => {
  return {
    id: idGlobal++,
    name: `cat ${idGlobal}`
  };
}*/
let addList = (e) => {
  console.log(e);
}


/*let list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 }
])*/
let list2 = ref( [
  // { name: "cat 5", id: 5 },
  // { name: "cat 6", id: 6 },
  // { name: "cat 7", id: 7 }
])


const obj = ref<object>({
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
    data: ["gg",],
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
    data: [1,],
  },
  ]
});
fetch('https://24h-aqi-list.vercel.app/api').then(data => {
  return data.json()
}).then(data => {
  let xData = data[0][1].map((item: { area: any }) => item.area)
  let sData = data[0][1].map((item: { aqi: any }) => item.aqi)
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
})

</script>

<style scoped lang="less">
:deep(.vdr-stick)  {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  font-size: 1px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(108, 108, 108, 0);
  box-shadow: 0 0 2px rgba(187, 187, 187, 0);
}

.vdr.active:before { //
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline: 1px dashed rgba(214, 214, 214, 0);
}

.design {
  width: calc(100vw - 300px);
  .dragArea {
    width: 100%;
    min-height: calc(100vh - 90px);
    overflow: hidden;
    .list-group-item {
      cursor: pointer;
    }
  }
}

</style>
