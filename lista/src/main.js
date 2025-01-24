import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(router).use(store).mount('#app')
