/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-17 21:38:58
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-23 00:18:46
 * @FilePath: \viteTest\viteTest\src\components\boxSelect.js
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
/**
 * @description:
 * @param {echartObject} chart对象
 * @param int num 出光次数
 * @return promise
 */
export function boxSelect(chart, num) {
  return new Promise((res, err) => {
    chart.on('brushEnd', function (params) {
      console.log('66')
      console.log(params)
      if (params.areas.length === num) {
        res(
          params.areas.map((item) => {
            return item.coordRange[0]
          })
        )
      } else if (params.areas.length > num) {
        chart.dispatchAction({
          type: 'brush',
          areas: []
        })
        err(num)
      }
    })
  })
}
