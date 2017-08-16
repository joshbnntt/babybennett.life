<template>
  <section class="contain">
    <h1>He's here and his name is Daniel Alvin.</h1>
    <nuxt />
  </section>
</template>

<script>
  import Countdown from '~/components/Countdown'

  export default {
    head () {
      return {
        title: 'Baby Bennett'
      }
    },
    data () {
      return {
        showInWeeks: true
      }
    },
    components: {
      'count-down': Countdown
    }
  }
</script>

<style scoped lang="scss">
.contain {
  display: flex;
  font-family: 'Roboto', sans-serif, Regular;
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
