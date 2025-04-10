import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
// import primevue components
import Aura from '@primeuix/themes/aura'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
// import OverlayBadge from 'primevue/overlaybadge'
import Ripple from 'primevue/ripple'

import 'primeicons/primeicons.css'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{red.50}',
      100: '{red.100}',
      200: '{red.200}',
      300: '{red.300}',
      400: '{red.400}',
      500: '{red.500}',
      600: '{red.600}',
      700: '{red.700}',
      800: '{red.800}',
      900: '{red.900}',
      950: '{red.950}',
    },
  },
  components: {
    menubar: {
      padding: '0.5rem 1rem',
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
  ripple: true,
})

app
  .component('Button', Button)
  .component('Menubar', Menubar)
  .component('Badge', Badge)

app.directive('ripple', Ripple)

app.mount('#app')
