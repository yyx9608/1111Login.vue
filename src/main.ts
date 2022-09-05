import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import element from 'element-plus';

const app = createApp(App).use(router).use(store).use(element);
app.mount('#app');
