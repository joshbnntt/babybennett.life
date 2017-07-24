<template>
  <div>
    <header>
      <div class="nav">
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
      </div>
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
  padding-top:86px;
  color: darkslategray;
}

.button, .button:visited {
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus {
  color: #fff;
  background-color: #3B8070;
}

.title {
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
header {
  z-index: 500;
  position: fixed;
  
  height: 64px;
  left: 0;
  right: 0;
  top: 0;
}
.nav {
  display: flex;
  justify-content: flex-start;
  background-color: aqua;
  position: relative;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  line-height: 64px;
  width:100%;
  padding-right: 5px;
  .nav-item {
    position: relative; 
    z-index: 1500;
    margin-top:0;
    margin-bottom: 0;
    height:64px;
    width: 100px;
    font-size: 1.5em;
    padding-right: 15px;
    padding-left: 15px;
    text-align: center;

    a {
      display: block;
      height: 100%;
      width: 100%;
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
