<template>
  <i :class="['mt-icon icon',icon]"></i>
</template>

<script>
  export default {
    name: 'vue-ionicons',
    props:{
      icon:String
    }
  };
</script>

<style lang="scss">

  // /Users/feizheng/github/vue-ionicons/node_modules/ionicons/dist/scss/ionicons.scss
  .mt-icon{
    user-select:none;
  }
</style>
