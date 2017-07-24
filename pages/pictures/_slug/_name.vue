<template>
<div>

  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
    <v-card>
      <v-toolbar dark class="primary">
        <v-btn icon @click.native="() => $router.go(-1)" dark>
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="b-dark full-screen">
        <image-loader 
          :src="currentImage.url" 
          :alt="currentImage.name">
        </image-loader>
      </div>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import ImageLoader from '~/components/ImageLoader'

export default {
  asyncData ({params, store}) {
    return {
      dialog: true,
      currentImage: store.state.albums.filter(a => a.slug === params.slug)[0].pictures.filter(p => p.name === params.name)[0]
    }
  },
  components: {
    ImageLoader
  }
}
</script>


<style lang="scss" scoped>
.full-screen {
  height: 100vh;
  padding-top: 10px;
}
.b-dark {
  background-color: #000;
}
</style>
