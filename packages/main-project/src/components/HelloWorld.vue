<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import { reactive, toRefs, onMounted, ref } from 'vue'
import  {TestButton} from "@newborn/components"
defineProps<{ msg: string }>()
let kk = ref<string>('lllll')
let hh = ref<string>('sdsadasdsa')
let drag = ref(false)
let myArray = ref([1, 2, 3, 4, 5, 6])
let clickData = () => {
  console.log(myArray)
}
</script>

<template>
  <VueDraggableNext
      v-model="myArray"
      @start="drag=true"
      @end="drag=false"
  >
    <div
        class="item"
        v-for="element in myArray"
    > {{element}}
    </div>
  </VueDraggableNext>
  <el-button @click="clickData">点击我</el-button>
  <div>
    {{myArray}}
  </div>
</template>

<style scoped>
.item{
  margin-top: 20px;
  color: #ffffff;
  width: 100px;
  height: 30px;
  background: #00B7FF;
}
</style>
