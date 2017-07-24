<template>
  <section class="contain">
    <h1>Coming this August!</h1>
    <h2>We're having a Boy!!</h2>
    <count-down date="2017-08-23T00:00:00Z" :inWeeks="showInWeeks" @toggleWeeks="showInWeeks = !showInWeeks">
      <h3 slot="title"> It'll be here in:</h3>
      <span slot="finished"></span>
    </count-down>
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
