<template>
    <div class="carousel">
     
      <v-carousel v-if="images && images.length > 0">
        <v-carousel-item v-for="(image, index) in images" :src="image.url" :key="image.name"/>
      </v-carousel>
      <div v-else>
        <h1>No Images to display</h1>
        <nuxt-link to="/pictures">Back</nuxt-link>
      </div>
    </div>
</template>

<script>

  export default {
    head () {
      return {
        title: 'Baby Bennett'
      }
    },
    asyncData ({params, store}) {
      return {
        loaded: false,
        images: store.getters.getGalleryImagesBySlug(params.slug)
      }
    }
  }
</script>

<style scoped lang="scss">
.carousel {
  width: 70vw;
  margin: auto;
  min-height: 600px;

  @media(min-width: 900px) {
    .carousel__item {
      background-size: 600px auto;
    }
  }

  @media(max-width: 850px) {
    width: 90vw;
    
  }

  @media(max-width: 400px) {
    width: 100vw;
      
  }
}
</style>
