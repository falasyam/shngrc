<template>
  <div class="section" id="home">
        <div class="section" id="description" justify="center">
        <v-responsive>
            <v-parallax
                src="https://i.ibb.co/DgzfpQb/sggg.jpg"
            >
                <v-row
                align="center"
                justify="center"
                >
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
                    <h4 class="subheading">Build your application today!</h4>
                </v-col>
                </v-row>
            </v-parallax>
        </v-responsive>
        </div>
        <div class="py-4"></div>
        <div class="section" id="jiko">
            <v-responsive>
                <v-container fluid class="fill-height">
                    <v-row no-gutters>
                        <v-col cols="12" class="pa-3">
                            <span class="asbetter font-weight-bold purple--text">Jikoshoukai</span><br/>
                            <span class="display-2 font-weight-bold">
                                “Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. 
                                Namaku Gracia. Always Smile.”
                            </span>
                        </v-col>
                        <v-btn outlined class="pa-3 ma-3">
                        <router-link to="/about"><span class="black--text">Tentang Gracia</span></router-link></v-btn>
                    </v-row>
                </v-container>
            </v-responsive>
        </div>
        <div class="py-4"></div>
        <div class="section" id="show">
            <v-responsive>
                <v-container fluid class="fill-height">
                    <v-row no-gutters>
                        <div class="py-12"></div>
                          <v-col cols="12" lg="6" md="6" justify="center" align="center" class="pa-2">
                            <div class="py-8"></div>
                            <v-card
                                elevation="0"
                            >
                                <v-img class="" width="80" height="80" :src='require("../assets/stage.svg")'/>
                                <v-card-title class="ndasmu">500+ Show</v-card-title>

                                <v-card-text>Gracia telah tampil 500 lebih di Theater JKT48</v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6" md="6" justify="center" align="center" class="pa-2">
                            <div class="py-8"></div>
                            <v-card
                                elevation="0"
                            >
                                <v-img class="" width="80" height="80" :src='require("../assets/rank.svg")'/>
                                <v-card-title class="ndasmu">Peringkat 10</v-card-title>

                                <v-card-text>Dalam SSK Single Original 2019, Gracia menempati peringkat 10.</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </div>
        <div class="py-4"></div>
        <div class="section" id="sosmed">
            <v-responsive>
                <v-container fluid class="fill-height">
                    <h2 class="display-1 pa-3 font-weight-bold" align="center" justify="center">Social Media</h2>
                    <v-divider></v-divider>
                    <v-row no-gutters>
                        <v-col cols="12" class="pa-3 text--center" md="6" lg="6">
                            <v-card outlined class="md-ma-5 md-pa-5 justify-center">
                                <Timeline id="S_GraciaJKT48" sourceType="profile" :options="{ tweetLimit: '3' , cards: 'hidden' }"><div class="spinner"></div></Timeline>
                            </v-card>
                        </v-col>
                        <v-col cols="12" class="pa-3 text--center" md="6" lg="6">
                            <instagram-embed
                                :url="'https://www.instagram.com/p/CDV3nxphQ_1/'"
                                :max-width=500
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-responsive>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { Timeline } from 'vue-tweet-embed'
import InstagramEmbed from 'vue-instagram-embed'

export default {
  name: 'Home',
  components: {
    Timeline,
    InstagramEmbed,
  }
}
</script>

<style scoped>
  a {  
    text-decoration: none;
  }

  a:hover{
      color: #000;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

 .ndasmu {
      font-size: 34px;
      text-align: center;
      justify-content: center;
      align-content: center;
  }
</style>