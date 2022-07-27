<template>
  <div>{{text}}</div>
</template>

<script>
export default {
  name: "button",
  props: {
    text: {
      type: String,
      default: '0000'
    }
  }
}
</script>

<style scoped>

</style>
