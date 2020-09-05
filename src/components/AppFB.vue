<template>
    <v-layout justify-center>
      <v-app-bar
        color="transparent"
        app
        flat
      >
        <v-btn icon color="#8e44ad"><router-link to="/"><v-icon color="#8e44ad">mdi-arrow-left</v-icon></router-link></v-btn>
        <div class="pa-1"></div>
        <div
            :class="{'display-5 font-weight-medium': $vuetify.breakpoint.smAndUp,'title font-weight-medium': $vuetify.breakpoint.smAndDown, }"
          ><span class="purple--text">Gracias</span></div>
        <v-spacer></v-spacer>
          <v-toolbar-items class="text-right" id="menu">
          </v-toolbar-items>
      </v-app-bar>
    </v-layout>
</template>

<script>
export default {
  name: 'AppBar',

  data () {
      return {
        sheet: false,
        items: [
          { title: 'Home', icon: 'mdi-home-variant-outline', link:'/' },
          { title: 'About', icon: 'mdi-account-outline', link:'/about'  },
          { title: 'Video', icon: 'mdi-video-outline', link:'/video'  },
          { title: 'Photo', icon: 'mdi-image-outline', link:'/photo'}
        ],
        options: {
          fitToSection: false,
        }
      }
    },
};
</script>

<style scoped>
  a {  
    text-decoration: none;
    color: black;
    background-color: transparent;
  }

  .atas {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
</style>