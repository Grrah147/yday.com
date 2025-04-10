import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
// import primevue components
import Aura from '@primeuix/themes/aura'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
// import OverlayBadge from 'primevue/overlaybadge'

import Fluid from 'primevue/fluid'

import Ripple from 'primevue/ripple'

import 'primeicons/primeicons.css'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
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
  .component('Card', Card)
  .component('Stepper', Stepper)
  .component('StepList', StepList)
  .component('StepPanels', StepPanels)
  .component('StepItem', StepItem)
  .component('Step', Step)
  .component('StepPanel', StepPanel)
  .component('Fluid', Fluid)

app.directive('ripple', Ripple)

app.mount('#app')
