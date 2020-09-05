<template>
    <section>
        <AppFB/>
        <section>        
            <v-responsive>
                <v-carousel cycle :show-arrows="false" hide-delimiters style="width:100%">
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-responsive>
        
        </section>
        <v-container>
            <v-row no-gutters>
              <v-col cols="12" justify="center" align="center">
                <div class="py-4"></div>
                <span class="display-1">About Gracias</span>
              </v-col>
              <v-col cols="12" md="12" lg="12" xs="12" sm="12" justify="center" align="center" class="">
                <div class="py-4"></div>
                  <v-img src="https://pbs.twimg.com/profile_banners/2293846032/1577564479/600x200">
                  </v-img>
                <div class="py-4"></div>
              </v-col>
              <v-col cols="12" md="12" lg="12" xs="12" sm="12" justify="center" align="center" class="">
                <span class="pa-6 font-weight-bold">
                  Gracias diambil dari bahasa Spanyol yang berarti "Terima Kasih". Gracias adalah wadah untuk para fans Gracia yang ingin memberikan support untuk Gracia, sebagai bentuk terima kasih karena Gracia selalu menginspirasi kita semua. Selain itu Gracias bisa juga diartikan sebagai Gracia's, yang artinya kami adalah milik Gracia, yang akan selalu menemani di setiap langkah Gracia dalam mencapai mimpi-mimpinya
                </span>
                <div class="py-2"></div>
              </v-col>
              <v-divider></v-divider>
            </v-row>
        </v-container>
    </section>
</template>

<script>

import AppFB from '../components/AppFB'

  export default {
    components: {
        AppFB,
    },
    data () {
      return {
        items: [
          {
            src: 'https://i.ibb.co/J50CCTN/Gracias500showgre.jpg',
          },
          {
            src: 'https://i.ibb.co/zHkyWBs/gracias.jpg',
          },
        ],
      }
    },
  }
</script>