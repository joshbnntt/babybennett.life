<template>
<div>
 <div class="carousel-container">
  <ul class="carousel my-carousel carousel--thumb">
    <input 
      v-for="(image, index) in images" 
      type="radio" 
      class="carousel__activator" 
      name="thumb" 
      :id="image.name" 
      :checked="index == 0"
      :style="'background-image:url(' + image.url + '); background-size:cover; background-position: center;'">
    <div class="carousel__controls" v-for="(image, index) in images">
      <label v-if="index > 0" class="carousel__control carousel__control--backward" :for="images[index - 1].name"></label>
      <label v-else class="carousel__control carousel__control--backward" :for="images[images.length -1].name"></label>
      <label v-if="images.length > index + 1" class="carousel__control carousel__control--forward" :for="images[index + 1].name"></label>
      <label v-else class="carousel__control carousel__control--forward" :for="images[0].name"></label>
    </div>
      <template v-for="(image, index) in images">
        <li 
          class="carousel__slide" 
          >
          <img :src="image.url" alt="" :style="{display:(index != 0)}">
        </li>
      </template>

    <div class="carousel__indicators">
        <label v-for="image in images" class="carousel__indicator" :for="image.name"></label>
    </div>
  </ul>
</div> 


</div>
</template>

<script>
  export default {
    props: ['images']
  }
</script>

<style scoped lang="stylus">
    /**
  * style variables
*/
$noOfSlides            = 2
$carouselHeight        = 500px
$carouselWidth         = 90vw
$carouselIndicatorSize = 15px
$carouselControlSize   = 30px
$slideTransition       = .5s

@keyframes carousel-show-slide
  from
    opacity 0
  to
    opacity 1

/**
  * Control & indicator mixin
*/
.carousel
  height     $carouselHeight
  width      $carouselWidth
  overflow   hidden
  text-align center
  position   relative
  padding    0
  list-style none

  // &__slide
  &__controls
  &__activator
    display none

  /**
  * Where the magic happens
  */
  for num in 1..$noOfSlides
    &__activator:nth-of-type({num})
      &:checked ~ .carousel__track
        transform translateX(-((num - 1) * 100%))
      &:checked ~ .carousel__slide:nth-of-type({num})
        animation carousel-show-slide $slideTransition
        top 0
        left 0
        right 0
      &:checked ~ .carousel__controls:nth-of-type({num})
        display block
      &:checked ~ .carousel__indicators .carousel__indicator:nth-of-type({num})
        opacity 1

  /**
    * Control element - right/left arrows
  */
  &__control
    height       $carouselControlSize
    width        $carouselControlSize
    margin-top   -($carouselControlSize / 2)
    top          50%
    position     absolute
    display      block
    cursor       pointer
    border-width 5px 5px 0 0
    border-style solid
    border-color #fafafa
    opacity      .35
    outline      0
    z-index      3

    &:hover
      opacity 1

    &--backward
      left      10px
      transform rotate(-135deg)

    &--forward
      right     10px
      transform rotate(45deg)

  /**
    * Element for holding slide indicators
  */
  &__indicators
    position   absolute
    bottom     20px
    width      100%
    text-align center

  /**
    * Indicator for indicating active slide
  */
  &__indicator
    height        $carouselIndicatorSize
    width         $carouselIndicatorSize
    border-radius 100%
    display       inline-block
    z-index       2
    cursor        pointer
    opacity       .35
    margin        0 2.5px 0 2.5px
    &:hover
      opacity     .75

  /**
    * Create rules for when slides are contained within a track
  */
  &__track
    position absolute
    top      0
    right    0
    bottom   0
    left     0
    padding  0
    margin   0
    transition transform $slideTransition ease 0s

    .carousel__slide
      display block
      top     0
      left    0
      right   0
      for num in (1..$noOfSlides)
        &:nth-of-type({num})
          transform translateX((num - 1) * 100%)

  &__slide
    height     100%
    position   absolute
    overflow-y auto

/**
  * Theming
*/
*
  box-sizing border-box

body
   background-color #111
   text-align       center
   color white

.carousel-container
  display       inline-block

.my-carousel
  border-radius 5px
  border        2px solid silver

.carousel__slide
  overflow      hidden

h1
  font-size   50px
  line-height 50px
  color       #fafafa
  position    absolute
  top         50%
  width       100%
  text-align  center
  margin-top  -25px

h2
h3
  color #fafafa

h3
  font-size 50px

.carousel__indicator
  background-color #fafafa

/*for num in (1..$noOfSlides)
  .carousel__slide:nth-of-type({num})
  .carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type({num})
    // multiply to get better quality pics
    background-image url('https://unsplash.it/' + (num * 3) + '00?random')
    background-size cover
    background-position center*/

.carousel--thumb .carousel__indicators .carousel__indicator
  height 30px
  width  30px
  
@media(max-width: 400px) {
  .carousel {
    max-width: 100vw;
  }
}

</style>
