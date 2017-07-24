<template>
    <div>
      <v-container  v-if="images && images.length > 0" fluid v-bind="{ [`grid-list-sm`]: true }">
        <h2>{{name}}</h2>
        <v-layout row wrap>
          <v-flex
            v-for="(image, index) in images" :key="image.name"
            class="xs"
          >
            <v-card flat tile>
              <v-card-media
                :src="`${imageUrl(image)}`"
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
    scrollToTop: true,
    head () {
      return {
        title: 'Baby Bennett'
      }
    },
    asyncData ({params, store}) {
      return {
        loaded: false,
        images: store.getters.getGalleryImagesBySlug(params.slug),
        dialog: false,
        slug: params.slug,
        name: store.state.albums.filter(a => a.slug === params.slug)[0].name
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
        this.$router.push(`/pictures/${this.slug}/${image.name}`)
      },
      imageUrl (image) {
        if (image.min) {
          return image.min
        } else {
          return image.url
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.card__media {
  height: 100px !important;

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

.xs {
  flex-basis: 0% !important;
  max-width: 0% !important;

  @media(min-width: 900px) {
    flex-basis: 16% !important;
    max-width: 100% !important;
  }

  @media(max-width: 850px) {
    flex-basis: 33.33333333333333% !important;
    max-width: 33.33333333333333% !important;    
  }

  @media(max-width: 415px) {
    flex-basis: 50% !important;
    max-width: 50% !important;      
  }

  @media(max-width: 320px) {
    flex-basis: 50% !important;
    max-width: 33.333333% !important; 
  }
}
</style>
