// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap-flatly.css'
import firebase from 'firebase'


var config = {
  apiKey: "AIzaSyDZX_qPJUCxqY3Qp7kygynERDkFgI0ephE",
  authDomain: "fir-project-4bcfc.firebaseapp.com",
  databaseURL: "https://fir-project-4bcfc.firebaseio.com",
  projectId: "fir-project-4bcfc",
  storageBucket: "fir-project-4bcfc.appspot.com",
  messagingSenderId: "670786535968"
}
const firebaseApp = firebase.initializeApp(config);
Vue.prototype.$db = firebaseApp.database().ref('random-story')
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
