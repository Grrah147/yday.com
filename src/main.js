import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import Fluid from 'primevue/fluid'
import Ripple from 'primevue/ripple'
import Carousel from 'primevue/carousel'
import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'
import Tag from 'primevue/tag'
import Message from 'primevue/message'
import Checkbox from 'primevue/checkbox'
import SelectButton from 'primevue/selectbutton'
import RadioButton from 'primevue/radiobutton'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import Drawer from 'primevue/drawer'

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
      darkModeSelector: '.yd-app-dark',
      cssLayer: false,
    },
  },
  ripple: true,
})
app.use(i18n)
app.use(ToastService)

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
  .component('Menu', Menu)
  .component('Carousel', Carousel)
  .component('Fieldset', Fieldset)
  .component('Panel', Panel)
  .component('SelectButton', SelectButton)
  .component('Tag', Tag)
  .component('Message', Message)
  .component('Checkbox', Checkbox)
  .component('RadioButton', RadioButton)
  .component('Drawer', Drawer)
  .component('Toast', Toast)

app.directive('ripple', Ripple)

app.mount('#app')
