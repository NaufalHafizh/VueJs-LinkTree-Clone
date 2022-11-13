import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import VueGtagPlugin from 'vue-gtag'

const app = createApp(App);
app.use(VueGtagPlugin, {
    config: { 
        id: "G-N61429RRZD",
    },
})
createApp(App).mount('#app')
