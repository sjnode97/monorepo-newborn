<template>
  <div>{{props.text}}</div>
  <div ref="echarts">

  </div>
</template>

<script lang="ts" setup>
/*defineProps<{ // 采用ts专有声明，无默认值
  text: {
    type: string,
    default: '000'
  },
}>()*/

interface Props {
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  text: 'hello',
})
</script>

<style scoped>

</style>
