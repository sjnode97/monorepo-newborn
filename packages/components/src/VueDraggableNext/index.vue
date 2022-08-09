<template>
  <VueDraggableNext
      v-model="myArray"
      @start="drag=true"
      @end="drag=false"
  >
    <div
        class="item"
        v-for="element in myArray"
    >
      {{element}}
    </div>
  </VueDraggableNext>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueDraggableNext } from 'vue-draggable-next'
let drag = ref(false)
let myArray = ref([1, 2, 3, 4, 5, 6])
let clickData = () => {
  console.log(myArray)
}
</script>

<style scoped>

</style>
