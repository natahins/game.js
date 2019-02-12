import Vue from 'vue';
import App from './App.vue'
import store from './vuex/store'


Vue.config.productionTip = false
window.store = store;

new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App />'
});
// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app')
