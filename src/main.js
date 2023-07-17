import { createApp } from 'vue'
import { DstnyDsLib } from '@telepo/dstny-ds/dist/dstny-ds-vue';
import App from './App.vue'

createApp(App).use(DstnyDsLib).mount('#app')
