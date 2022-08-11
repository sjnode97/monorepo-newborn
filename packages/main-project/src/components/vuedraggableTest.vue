<template>
  <div class="list">
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

<!--    <div class="col-3">
      <h3>Draggable 2</h3>
      <VueDraggableNext
          class="dragArea list-group"
          :list="list2"
          group="people"
          @change="log"
      >
        <div
            class="list-group-item"
            v-for="element in list2"
            :key="element.name"
        >
          {{ element.name }}
        </div>
      </VueDraggableNext>
    </div>-->

  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import {ref} from "vue";


let log = (evt: any) => {
  // window.console.log(evt);
}
let idGlobal = 8;
let cloneDog = (e : any) => {
  return {
    id: idGlobal++,
    name: `cat ${idGlobal}`,
    componentsName: e.componentsName
  };
}


let list1 = ref([
  { name: "生成1个echarts1", id: 1, componentsName: 'charts' },
  { name: "生成1个echarts2", id: 2, componentsName: 'my-Tree' },
])
/*let list2 = ref( [
  { name: "cat 5", id: 5 },
  { name: "cat 6", id: 6 },
  { name: "cat 7", id: 7 }
])*/

</script>

<style scoped lang="less">
.list {
}
.list-group-item {
  width: 300px;
  line-height: 50px;
  background: #00B7FF;
  margin-top: 10px;
  text-align: center  ;
}
</style>
