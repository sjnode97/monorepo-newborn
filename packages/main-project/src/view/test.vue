<template>
  <div ref="el">
    Click Outside of Me

    sss
  </div>
  <div ref="gg">
dsdsadasdnsnadjkl
  </div>
</template>
<script setup>
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2

</script>


