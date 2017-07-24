<template>
    <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
        <button class="carousel__nav carousel__next" @click.prevent="next"></button>
    </div>
</template>

<script>

  export default {
    data () {
      return {
        index: 0,
        slides: []
      }
    },
    mounted () {
      this.slides = this.$children
      this.slides.forEach((slide, i) => {
        slide.index = i
      })
    },
    computed: {
      slideCount () {
        return this.slides.length
      }
    },
    methods: {
      next () {
        this.index++
        if (this.index >= this.slideCount) {
          this.index = 0
        }
      },
      prev () {
        this.index--
        if (this.index < 0) {
          this.index = this.slideCount - 1
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .carousel {
    position: relative;
  }
  .carousel__nav {
    height: 30px;
    width: 30px;
    margin-top: -(30px / 2);
    top: 50%;
    position: absolute;
    display: block;
    cursor: pointer;
    border-width: 5px 5px 0 0;
    border-style: solid;
    border-color: #000;
    opacity: .35;
    outline: 0;
    z-index: 3;

    &:hover {
      opacity: 1;
    }

    &.carousel__prev {
      left: 10px;
      transform: rotate(-135deg);
    }

    &.carousel__next{
      right: 10px;
      transform: rotate(45deg);
    }
  }
    

    
</style>
