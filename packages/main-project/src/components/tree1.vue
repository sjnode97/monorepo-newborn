<template>
  <MyTree/>
  <Charts :myOption="obj"/>

</template>

<script setup lang="ts">
import  {MyTree, Charts} from "@newborn/components"
import {ref} from "vue";
const obj = ref<object>( {
  grid: {
    top: 0,
    bottom: 0,
    left: '10%',
    right: '10%',
  },
  xAxis: {
    show: false,
    type: 'value',
    boundaryGap: [0, 0],
  },
  yAxis: [
    {
      type: 'category',
      data: [''],
      axisLine: { show: false },
      axisTick: [
        {
          show: false,
        },
      ],
    },
  ],
  series: [
    {
      name: '金额',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 30,
          color: 'rgba(48, 236, 166, 1)'
        },
      },
      barWidth: 20,
      data: [10],
    },
    {
      name: '背景',
      type: 'bar',
      barWidth: 20,
      barGap: '-100%',
      data: [20],
      itemStyle: {
        normal: {
          color: 'rgba(28, 128, 213, 0.19)',
          borderWidth: 1,
          borderColor: 'rgba(48, 236, 166, 1)',
          barBorderRadius: 30,
        },
      },
    },
  ],
});
</script>

<style scoped>

</style>
