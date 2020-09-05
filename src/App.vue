<template>
  <v-app>    
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