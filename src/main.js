import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import { Tweet, Moment, Timeline } from 'vue-tweet-embed';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Tweet,
  Moment,
  Timeline,
  render: h => h(App)
}).$mount('#app')
