<template>
    <div>
     <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
        <v-card>
          <v-toolbar dark class="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <!--<v-carousel :cycle="false" :current="currentImage">
            <v-carousel-item v-for="(image, index) in images" :key="image.name" v-bind:src="image.url"></v-carousel-item>
          </v-carousel>-->
          <div class="b-dark full-screen">
            <image-loader 
              :src="currentImage.url" 
              :alt="currentImage.name">
            </image-loader>
          </div>
        </v-card>
      </v-dialog>
      <v-container  v-if="images && images.length > 0" fluid v-bind="{ [`grid-list-sm`]: true }">
        <v-layout row wrap>
          <v-flex
            xs4
            v-for="(image, index) in images" :key="image.name"
          >
            <v-card flat tile>
              <v-card-media
                :src="`${image.url}`"
                height="150px"
                @click.native="openImage(image)"
              >
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <div v-else>
        <h1>No Images to display</h1>
        <nuxt-link to="/pictures/">Back</nuxt-link>
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
    asyncData ({params, store}) {
      return {
        loaded: false,
        images: store.getters.getGalleryImagesBySlug(params.slug),
        dialog: false
      }
    },
    data () {
      return {
        currentImage: {}
      }
    },
    components: {
      ImageLoader
    },
    methods: {
      openImage (image) {
        this.currentImage = image
        this.dialog = true
      }
    }
  }
</script>

<style scoped lang="scss">
.card__media {
  height: 800px !important;

  @media(min-width: 900px) {
    height: 500px !important;
  }

  @media(max-width: 850px) {
    height: 300px !important;
    
  }

  @media(max-width: 400px) {
    height: 150px !important;
      
  }

  @media(max-width: 320px) {
    height: 100px !important;
  }
}

.full-screen {
  height: 100vh;
  padding-top: 10px;
}
.b-dark {
  background-color: #000;
}
</style>
