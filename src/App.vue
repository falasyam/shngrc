<template>
  <v-app>
    <v-layout justify-center>
      <v-app-bar
        color="transparent"
        app
        flat
      >
        <div
            :class="{'display-5 font-weight-medium': $vuetify.breakpoint.smAndUp,'title font-weight-medium': $vuetify.breakpoint.smAndDown, }"
          ><span class="purple--text">SHNGRC</span></div>
        <v-spacer></v-spacer>
          <v-app-bar-nav-icon color="#8e44ad" @click.stop="sheet = !sheet" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-items class="text-right hidden-sm-and-down" id="menu">
            <v-btn
              text
            ><router-link to="/"><span class="purple--text">Home</span></router-link></v-btn>
            <v-btn
              text
            ><router-link to="/about"><span class="purple--text">About</span></router-link></v-btn>
            <v-btn
              text
            ><router-link to="/video"><span class="purple--text">Video</span></router-link></v-btn>
            <v-btn text>
              <router-link to="/photo"><span class="purple--text">Photo</span></router-link>
            </v-btn>
          </v-toolbar-items>
      </v-app-bar>
      <v-bottom-sheet v-model="sheet" class="atas">
        <v-list class="atas">
          <v-btn depressed :style="{left: '50%', transform:'translateX(-50%)'}" width="1px" height="4px" color="#d1d1cf"></v-btn>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            >
              <v-list-item-icon>
                <v-icon color="#8e44ad">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-layout>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from '../src/components/Footer'

export default {
  name: 'App',
  title: 'Shania Gracia - Fansite',

  components: {
    Footer
  },

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