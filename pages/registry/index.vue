<template>
  <div class="registries">
    <h3> We are registered at:</h3>
    <v-card horizontal hover raised>
        <v-card-media src="/Logo_Babies_R_Us.svg" :class="{card_logo:true}">
        </v-card-media>
        <v-card-actions>
          <v-btn flat class="white--text" @click.native="goToThere(babiesRUs)">Go There</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon dark ripple @click.native="goToThere(babiesRUs)">
            <v-icon>open_in_new</v-icon>
          </v-btn>
        </v-card-actions>
    </v-card>
    <v-card horizontal hover raised>
        <v-card-media src="/Amazon_logo_plain.svg" :class="{amazon_card_logo:true}">
        </v-card-media>
        <v-card-actions>
          <v-btn flat class="white--text" @click.native="goToThere(amazon)">Go There</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon dark ripple @click.native="goToThere(amazon)">
            <v-icon>open_in_new</v-icon>
          </v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        babiesRUs: 'https://www.toysrus.com/registry/link/index.jsp?overrideStore=TRUS&registryNumber=59343367',
        amazon: 'http://a.co/9pDSSvW'
      }
    },
    head () {
      return {
        title: 'Registery'
      }
    },
    methods: {
      goToThere (url) {
        window.open(url, '_blank')
      }
    }
  }

</script>

<style lang="scss" scoped>
  .registries {
    text-align: center;
  }
  .card {
    width:500px;
    margin:auto;
    margin-top: 15px;
    background-color: lightslategray !important;
    color: white;

    .card__row--actions {
      background-color: slategray !important;
    }
    .card_logo {
      height:70px !important;
    }
    .amazon_card_logo {
      height: 150px !important;
      background-size: 80% 80% !important;
      background-repeat: no-repeat !important;
    }

    @media(max-width: 400px) {
      width:100vw;
      margin: none;
      .card_logo {
        height:50px !important;
      }
      .amazon_card_logo {
        height: 110px !important;
      }
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
</style>
