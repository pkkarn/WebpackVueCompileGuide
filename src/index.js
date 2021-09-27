import './style.scss';
import axios from 'axios';
import Vue from 'vue';
import App from './App.vue'
//https://webpack.js.org/concepts/#loaders
// For scss:= style-loader, css-loader, sass-loader

axios.get('https://thoughtjumper.edvanta.com/api/v1/events/verb/COMPARE_LIST').then(function (response) {
    console.log(response.data);
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');