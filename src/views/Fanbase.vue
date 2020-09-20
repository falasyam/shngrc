<template>
    <section>
        <v-container>
            <v-row no-gutters>
              <v-col cols="12" align="center" justify="center">
                <span class="display-1">Halaman ini telah dipindah</span><br/>
                <v-btn href="https://fanbase.shaniagracia.my.id" color="purple" dark>Klik Disini</v-btn>
            </v-col>
          </v-row>
        </v-container>
    </section>
</template>

<script>
  export default {
    components: {
        
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
          {
            src: 'https://i.ibb.co/vP41rDY/20200905-175420.jpg',
          },
          {
            src: 'https://i.ibb.co/JcQbJ5y/20200905-180233.jpg',
          },
          {
            src: 'https://i.ibb.co/gJCpCz2/20200905-180129j.jpg',
          },
          {
            src: 'https://i.ibb.co/VgWQkwJ/20200905-180129h.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .gambar {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+, Firefox on Android */    
   -webkit-filter: grayscale(100%);
   -moz-filter: grayscale(100%);
   -ms-filter: grayscale(100%);
   filter: grayscale(100%);
   filter: gray; /* IE 6-9 */
  }

  .gambar:hover {
   -webkit-filter: none;
   -moz-filter: none;
   -ms-filter: none;
   filter: none;
  }
</style>