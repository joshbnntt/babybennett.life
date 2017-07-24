<template>
  <section class="contain">
    <nuxt />
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Baby Bennett | Pictures'
      }
    }
  }
</script>

<style scoped lang="scss">
  .contain {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width:100%;
    z-index: 1;
    margin: 0;
    text-align: center;
  }
  .title {
    margin: 50px 0;
  }


</style>
