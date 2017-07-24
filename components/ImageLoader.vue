<template>
  <div :class="['image-color', {loaded: loaded}]">
    <img 
      :src="src" 
      :alt="alt"
      ref="mainimage"
      class="mainimage">
  </div>
</template>
<script>
export default {
  data () {
    return {
      loaded: false
    }
  },
  props: [
    'src',
    'alt'
  ],
  mounted () {
    this.$refs.mainimage.onload = () => {
      this.loaded = true
    }
  }
}
</script>
<style scoped lang="scss">

.mainimage {
  width: 75vw;
  max-width: 500px;
}

.image-color {
  display: inline-block;
  background-color: aqua;

  img {
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  &.loaded {
    background-color: #fff;
  }
  &.loaded img {
    opacity: 1;
  }
}
@media(max-width: 400px) {
  div {
    width: 90vw;
  }
  .mainimage {
    width: inherit;
  }
}
</style>
