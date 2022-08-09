<template>
  <div class="row">
    <div class="col-3">
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
    </div>

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
  window.console.log(evt);
}
let idGlobal = 8;
let cloneDog = ({ id }:any) => {
  return {
    id: idGlobal++,
    name: `cat ${idGlobal}`
  };
}


let list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 }
])
let list2 = ref( [
  { name: "cat 5", id: 5 },
  { name: "cat 6", id: 6 },
  { name: "cat 7", id: 7 }
])

</script>

<style scoped>

</style>
