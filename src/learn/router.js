/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 22:59:03
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-24 23:01:35
 * @FilePath: \viteTest\viteTest\src\learn\router.js
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
/*路由导航*/
const whileList = ['/']

router.beforeEach((to, from, next) => {
  if (whileList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})
