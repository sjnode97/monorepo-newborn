<template>
  <div>
    <el-input  v-model="input" placeholder="Please input" />
  </div>
</template>
<script lang="ts">
export default {
  name: "charts-option",
};
</script>
<script setup lang="ts">
import {ElInput} from "element-plus"
defineProps({
  input: {
    type: String,
    default: () => {
      return "ll"
    }
  }
})

/*function initObj(){
  let obj = new Object({});
  let begin = Date.now();
  for(let i=0;i<1000000;i++) {
    obj['name'+i]=i;
    //obj[i]=i
  }
  let end = Date.now();
  return end-begin;
}

function initMap(){
  let map = new Map();
  let begin = Date.now();
  for(let i=0;i<1000000;i++) {
    map.set('name'+i,i);
    //map.set(i,i)
  }
  let end = Date.now();
  return end-begin;
}

console.log(`object set spend ${initObj()},map set spend ${initMap()}`);*/
//object set spend 2179,map set spend 1638

// let input = ref<string>("dsdsdadsadsdsadsa")
</script>

<style scoped>

</style>
