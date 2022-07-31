/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 20:19:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-31 00:56:12
 * @FilePath: \viteTest\src\main.js
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
import { createApp } from "vue";

import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { router } from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
// app.prototype.$router = useRouter;
app.use(Antd);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
