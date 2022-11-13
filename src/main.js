import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import VueGtag from 'vue-gtag'

createApp(App).use(VueGtag, {

    config: { 
        id: "G-G6JQ3Y45K9" 
    }

}).mount("#app");
