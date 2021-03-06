import './config';
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueFire from 'vuefire';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});
//Filters
Vue.filter('to-uppercase', function(value) {
	return value.toUpperCase();
});
Vue.filter('snippet', function(value) {
	return value.slice(0,100) + '...';
});
// end filters



Vue.directive('theme', {
	bind(el, binding, vnode){
		if (binding.value == 'wide'){
			el.style.maxWidth = "1200px";
		} else if (binding.value == 'narrow'){
			el.style.maxWidth = "560px";
		}
		if (binding.arg == 'column'){
			el.style.background = "#ddd";
			el.style.padding = '20px';
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
