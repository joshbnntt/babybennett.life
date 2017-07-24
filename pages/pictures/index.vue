<template>
  <div>
    <h1 class="title">Choose a gallery:</h1>
    <div class="galleryContent">
      <div class="portrait" v-for="gallery in galleries" :key="gallery.id">
        <v-card :img="gallery.url" height="300px" hover raised>
          <v-card-actions class="white--text pl-3 pt-3 pb-3"> <nuxt-link :to="`/pictures/${gallery.slug}`">{{gallery.name}}</nuxt-link></v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageLoader from '~/components/ImageLoader'

  export default {
    head () {
      return {
        title: 'Baby Bennett'
      }
    },
    asyncData ({store}) {
      return {
        loaded: false,
        galleries: store.getters.galleries,
        banner: { name: 'sonagram', url: '/images/IMG_20170228_090856-COLLAGE.jpg' }
      }
    },
    components: {
      'image-loader': ImageLoader
    }
  }
</script>

<style scoped lang="scss">
.card {
  width: initial !important;
}

.galleryContent {
  width: 90vw;
  margin: auto;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;   
  flex-wrap: wrap;
  justify-content: center;
  a {
    text-decoration: none;
  }
  .galleryTitle {
    text-decoration: none;
    text-transform: uppercase;
  }
  .portrait {
    margin:15px;
    height:500px;
    width:50vh;
    .galleryTitle {
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
    }
    .card__row {
      background-color: rgba(0, 0, 0, 0.2);
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);        
      }
      a {
        text-transform: uppercase;
        font-size: 1.5em;
      }
    }
    @media(max-width: 400px) {
      width:100%;
      height:300px;
      
      div {
        width: 90vw;
      }
    }
  }
  @media(max-width: 400px) {
    flex-direction: column;
    margin:0;
  }
}
</style>
