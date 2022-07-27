<template>
  <div>
    组件测试环境
    <Button :text="msg" />
  </div>
</template>
<script lang="ts" setup>
import  {Button} from "@newborn/components"
let msg:string = '我是一个小按钮'
</script>
