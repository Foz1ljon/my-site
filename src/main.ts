import { ViteSSG } from 'vite-ssg'

import './styles/main.scss'
import App from './App.vue'
import HomeView from './pages/HomeView.vue'
import reveal from './directives/reveal'

export const createApp = ViteSSG(
  App,
  {
    routes: [{ path: '/', name: 'home', component: HomeView }],
  },
  ({ app }) => {
    app.directive('reveal', reveal)
  },
)
