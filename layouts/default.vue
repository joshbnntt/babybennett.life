<template>
  <div>
    <header>
      <!--<div class="nav">
        <nuxt-link tag="div" to="/" class="home nav-item" exact>
          <img src="/images/manifest/elephantAppIcon.png" alt="elephantLogo" class="elephantLogo" />
        </nuxt-link>
        <v-spacer></v-spacer>
        <nuxt-link tag="div" to="/pictures/" class="nav-item">
          <a>Pictures</a>
        </nuxt-link>
        <nuxt-link tag="div" to="/registry/" class="nav-item">
          <a>Registry</a>
        </nuxt-link>
      </div>-->
      <v-toolbar class="background primary">
        <nuxt-link tag="div" to="/" class="home nav-item" exact>
          <v-toolbar-title>
            <img src="/images/manifest/elephantAppIcon.png" alt="elephantLogo" class="elephantLogo" />
          </v-toolbar-title>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="">
          
            <nuxt-link to="/pictures/" class="nav-item">
              <v-btn flat>
                Pictures
              </v-btn>
            </nuxt-link>
            <nuxt-link to="/registry/" class="nav-item">              
              <v-btn flat>
                Registry
              </v-btn>
            </nuxt-link>
        </v-toolbar-items>
      </v-toolbar>
    </header>
    <div class="contents">
      <nuxt/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif, Medium;
}

.contents {
  position: relative;
  z-index: 1;
  padding-top:46px;
  color: darkslategray;
}
.background {
  &.primary {
    background-color: aqua;
  }
}
  .nav-item {

    a {
      text-decoration: none;
      color: black;
    }
    &.nuxt-link-active {
      a {
        color: white;
      }
      border-bottom-color: white;
      border-bottom-style: solid;
    }
    &:hover {
      a {
        color: white;
      }
      border-bottom-color: white;
      border-bottom-style: solid;
    }
  }

.home {
  overflow: hidden;
}

.elephantLogo {
  height: 46px;
  width: auto;
  margin-top: 8px;
}
</style>
