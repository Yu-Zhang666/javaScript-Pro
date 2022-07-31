<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 20:19:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-31 00:56:45
 * @FilePath: \viteTest\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
// 生命周期钩子
const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    console.log(`The initial count is.`);
    router.push({ name: "test1" });
  }, 3000);
});
</script>

<template>
  <div>
    <el-button type="primary">222</el-button>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <div :style="{ width: '40%' }">
      <Chart id="chart1"></Chart>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
