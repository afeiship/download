
import Vue from 'vue'

import 'ionicons/dist/scss/ionicons.scss';

import VueIonicons from './components/VueIonicons.vue'

console.log(VueIonicons);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div style="font-size:30px"><vue-ionicons icon="ion-ios-alarm">Hello</vue-ionicons></div>',
  components: { VueIonicons }
})
