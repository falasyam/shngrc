import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import { Tweet, Moment, Timeline } from 'vue-tweet-embed';
import Embed from 'v-video-embed';

Vue.config.productionTip = false

Vue.use(Embed),

new Vue({
  router,
  vuetify,
  Tweet,
  Moment,
  Timeline,
  Embed,
  render: h => h(App)
}).$mount('#app')
