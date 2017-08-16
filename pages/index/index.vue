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
        banner: { name: 'daniel', url: '/images/1.jpg' }
      }
    },
    components: {
      'image-loader': ImageLoader
    }
  }
</script>
