<template>
  <div class="section" id="home">
        <div class="section" id="description" justify="center">
        <v-responsive>
        <v-container
            fluid
            class="fill-height"
        >
            <v-row no-gutters>
            <v-col cols="12" md="12" lg="12" xs="12" sm="12" class="">
                <v-parallax
                  src="https://i.ibb.co/DgzfpQb/sggg.jpg"
                >
                </v-parallax>
            </v-col>
            </v-row>
        </v-container>
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
                        <v-btn outlined class="pa-3 ma-3">Tentang Gracia</v-btn>
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
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
 .ndasmu {
      font-size: 34px;
      text-align: center;
      justify-content: center;
      align-content: center;
  }
</style>