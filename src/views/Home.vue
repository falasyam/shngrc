<template>
  <div class="section" id="home">
        <div class="section" id="description" justify="center">
        <v-responsive>
            <v-parallax
                src="https://i.ibb.co/DgzfpQb/sggg.jpg"
            >
            
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
                            <div class="py-2"></div>
                            <v-btn outlined class="">
                            <router-link to="/about"><span class="black--text">Tentang Gracia</span></router-link></v-btn>
                        </v-col>
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
        <section>
            <v-row>
                <v-col cols="12" align="center" justify="center">
                    <v-img src="https://i.ibb.co/dfRKGrD/shngrclttr.png" width="200" height="65"></v-img>
                </v-col>
            </v-row>
        </section>
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