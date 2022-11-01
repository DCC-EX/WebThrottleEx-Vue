import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(createPinia());

app.mount("#app");
