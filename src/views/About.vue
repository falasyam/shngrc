<template>
  <v-layout>
    <v-container>
      <section>
        <v-responsive>
          <AppBar/>
          <v-container fill-height>
            <v-row no-gutters>
              <v-col cols="12" md="12" lg="12" xs="12" sm="12" justify="center" align="center" class="">
                <v-avatar size="240">
                  <v-img src="https://i.ibb.co/8BXXdrN/sg-sg-1.jpg">
                  </v-img>
                </v-avatar>
                <div class="py-3"></div>
              </v-col>
              <v-col cols="12" md="12" lg="12" xs="12" sm="12" justify="center" align="center" class="">
                <span class="display-1 font-weight-bold underlined">Shania Gracia</span><br/>
                <span class="font-weight-normal purple--text">
                  “Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. 
                  Namaku Gracia. Always Smile.”
                </span>
                <div class="py-2"></div>
              </v-col>
              <v-divider></v-divider>
              <v-col cols="12" md="12" lg="12" xs="12" sm="12" justify="center" align="center" class="">
                <span class="font-weight-normal">
                  Shania Gracia yang kerap dipanggil Gracia/Gre/Gege adalah member sekaligus kapten JKT48 Tim KIII. 
                  Shania Gracia lahir pada tanggal 31 Agustus 1999 dan 
                  merupakan anak pertama dari tiga bersaudara. Gracia terpilih Gen 3 JKT48 pada 15 Maret 2014.
                  Dan pada 24 Januari 2015, Gracia dipromosikan ke Tim T bersama Gen 3 lainnya.
                  Gre adalah pecinta warna ungu garis keras. Bahkan mempunyai impian kalau punya rumah sendiri, perabotannya mau serba ungu.
                  Selain suka warna ungu, Gracia juga suka fotografi.
                </span>
                <div class="py-3"></div>
                <span class="display-2 text-center purple--text">Sekali Lagi, Gracia!</span>
                <div class="py-3"></div>
              </v-col>
              <v-col cols="12" justify="center" align="center">
                <v-btn icon color="#8e44ad" href="https://www.youtube.com/channel/UCsf_Iko0T78cOk8ayVZc5ZA"> <v-icon>mdi-youtube</v-icon></v-btn>
                <v-btn icon color="#8e44ad" href="https://instagram.com/jkt48gracia"> <v-icon>mdi-instagram</v-icon></v-btn>
                <v-btn icon color="#8e44ad" href="https://twitter.com/S_GraciaJKT48"> <v-icon>mdi-twitter</v-icon></v-btn>
                <v-btn icon color="#8e44ad" href="https://tiktok.com/@graciajkt48"> <v-icon>mdi-music</v-icon></v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-responsive>
      </section>
      <section>
        <v-responsive>
          <v-container fill-height>
              <v-timeline :dense="$vuetify.breakpoint.xsOnly">
              <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                small
              >
                <template v-slot:opposite>
                  <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                  ></span>
                </template>
                <div class="py-4">
                  <span
                    :class="`headline font-weight-bold ${year.color}--text hidden-sm-and-up`"
                    v-text="year.year"
                  ></span>
                  <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.title}}</h2>
                  <div>
                    {{year.word}}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
            <div class="py-3"></div>
          </v-container>
        </v-responsive>
      </section>
      <section>
        <v-responsive>
          <v-container fluid class="fill-height">
            <h2 class="display-1 font-weight-bold" align="center" justify="center">Social Media</h2>
            <v-divider></v-divider>
              <v-row no-gutters>
                <v-col cols="12" md="6" lg="6" align="center" justify="center">
                  <v-card outlined class="justify-center">
                    <Timeline id="S_GraciaJKT48" sourceType="profile" :options="{ tweetLimit: '3' , cards: 'hidden' }"><div class="spinner"></div></Timeline>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="6" align="center" justify="center">
                  <instagram-embed
                    :url="'https://www.instagram.com/p/CFW30M4BXpP/'"
                    :max-width=400
                    :hide-caption=true
                  />
                </v-col>
                <div class="py-3"></div>
              </v-row>
            </v-container>
        </v-responsive>
      </section>
      <section>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-img src="https://i.ibb.co/dfRKGrD/shngrclttr.png" width="200" height="65"></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-layout>
</template>

<script>

import { Timeline } from 'vue-tweet-embed'
import InstagramEmbed from 'vue-instagram-embed'
import AppBar from '../components/AppBar'

  export default {
    components: {
      AppBar,
      Timeline,
      InstagramEmbed,
    },
    data: () => ({
      years: [
        {
          color: 'pink',
          year: '15 Maret 2014',
          title: 'Terpilih sebagai member JKT48 Gen 3',
          word: 'Sebanyak 32 member generasi 3 JKT48 diperkenalkan untuk pertama kalinya ke publik, salah satunya Gracia.15 April Gre memperkenal diri untuk pertama kalinya di Teater. Saat itu bersamaan dengan event direct selling single Flying Get'
        },
        {
          color: 'pink',
          year: '24 Januari 2014',
          title: 'Dipromosikan ke Tim T',
          word: 'Gracia bersama 15 generasi 3 lain terpilih sebagai member Tim T JKT48. Pengumuman disampaikan usai gelaran konser ‘Mulai Sekarang Sungguh-sungguh Part 2’ di Teater.',
        },
        {
          color: 'blue',
          year: '18 Desember 2015',
          title: 'Single Ke-12 JKT48',
          word: 'Masuk undergirls single ke-12 JKT48. Bahkan Gracia menjadi center.',
        },
        {
          color: 'black',
          year: '27 Februari 2016',
          title: 'SSK Single 13',
          word: 'Gracia meraih peringkat 11',
        },
        {
          color: 'blue',
          year: '11 September 2016',
          title: 'Grand Shuffle',
          word: 'Gracia pindah ke Tim KIII',
        },
        {
          color: 'grey',
          year: '22 April 2017',
          title: 'SSK Single 17',
          word: 'Gracia meraih peringkat 4',
        },
        {
          color: 'purple',
          year: '17 November 2018',
          title: 'SSK Single 20',
          word: 'Gracia meraih peringkat 8',
        },
        {
          color: 'green',
          year: '30 November 2019',
          title: 'SSK Single Original',
          word: 'Gracia meraih peringkat 10',
        },
        {
          color: 'blue',
          year: '6 Juni 2020',
          title: 'Pengumuman Kapten Tim KIII',
          word: 'Gracia diumumkan menjadi kapten tim KIII',
        },
      ],
    }),
  }
</script>