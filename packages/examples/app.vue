<template>
  <div>
    组件测试环境
    <TestButton :text="msg" />
  </div>
</template>
<script lang="ts" setup>
import  {TestButton} from "@newborn/components"
let msg:string = '我是一个小按钮'
</script>
