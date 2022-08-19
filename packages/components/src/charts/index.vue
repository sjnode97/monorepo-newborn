<template>
  <div ref="charts" id="chartDom" :style="style">
  </div>
</template>
<script lang="ts">
export default {
  name: "charts",
};
</script>

<script setup lang="ts">
import * as echarts from "echarts"
import {watch, toRefs,ref, onMounted} from "vue";
import {ECBasicOption} from "echarts/types/dist/shared";
const charts = ref();

let style = {
  width: "400px",
  height: "400px"
}
const props = defineProps<{
  myOption: object,
}>()
const { myOption } = toRefs(props)

onMounted(() => {
  const myChart = echarts.init( charts.value ); //charts.value
  myChart.setOption(<ECBasicOption>myOption.value);
  window.onresize = function () {
    myChart.resize();
  };
  watch(myOption,(value) => {
    myChart.setOption(<ECBasicOption>myOption.value);
  })
});


interface mytree {
  id: number
  title: string
  children?: mytree[]
}


interface Tree {
  label: string
  children?: Tree[]
}

</script>

<style scoped>

</style>
