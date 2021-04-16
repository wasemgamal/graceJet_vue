<template lang="html">
  <transition name="remove" mode="out-in">
    <div class="service-info">
      <h1 class="white">{{title}}</h1>
      <p>{{serviceContent}}</p>
    </div>
    
  </transition>
  
</template>

<script>
export default {
  name: 'service',
  props:{
    serviceContent: String,
    title: String
  }
}
</script>

<style lang="css" scoped>
</style>
