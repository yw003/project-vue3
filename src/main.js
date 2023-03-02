import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/fonts/iconfont.css'
import 'amfe-flexible'
import 'vant/lib/index.css';
import 'vant/es/toast/style';

require('./mock/mockList')

createApp(App).use(store).use(router).mount("#app");
