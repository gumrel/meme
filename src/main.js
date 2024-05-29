import './assets/main.css'

import { createApp } from 'vue'
//
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Home from './pages/Home.vue'
import favorites from './pages/favorites.vue'
//
import App from './App.vue'

const app = createApp(App)

//
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/favorites', name: 'favorites', component: favorites },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(autoAnimatePlugin)

app.use(router)
//

app.mount('#app')
