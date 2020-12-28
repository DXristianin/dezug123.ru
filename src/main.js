
import Vue from 'vue';
import App from '~/App';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU'


Vue.use(ElementUI, { locale })



Array.prototype.getFirst = function() {
  return this[0];
};

Array.prototype.getSecond = function() {
  return this[1];
};



(async () => {

  new Vue({
    el: '#app',
    render: h => h(App),
    async created() {
      
    },
    mounted() {
      
    },
  });

})();