<template>
  <div class="banner">
      <image-loader 
          :src="banner.url" 
          :alt="banner.name">
        </image-loader>
    </div>
</template>

<script>
  import ImageLoader from '~/components/ImageLoader'

  export default {
    data () {
      return {
        banner: { name: 'sonagram', url: '/images/IMG_20170228_090856-COLLAGE-min.jpg' }
      }
    },
    components: {
      'image-loader': ImageLoader
    }
  }
</script>
