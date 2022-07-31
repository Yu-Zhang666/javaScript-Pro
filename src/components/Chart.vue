<script>
//规定只能圈中n个，判断是否圈中了n个，则提交，少于n个提示，多于n个直接清除原始值
function transferParam(params) {
  return params.areas.map((item) => {
    return { startTime: item.coordRange[0][0], endTime: item.coordRange[0][1] }
  })
}

/*      @param chart Object
        @param params Object
        @param num int
      */
// function boxSelect(chart, params, num) {
//   console.log(params)
//   if (params.areas.length > num) {
//     chart.dispatchAction({
//       type: 'brush',
//       areas: []
//     })
//   }
// }
import * as echarts from 'echarts'
import { boxSelect } from './boxSelect'
let option = {
  brush: {
    xAxisIndex: 0
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: true },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7']
  },
  yAxis: {
    type: 'value'
  },

  series: [
    {
      data: [
        120, 200, 150, 80, 70, 110, 130, 122, 11, 111, 111, 11, 1, 1, 1, 1, 3,
        1, 13, 1, 3, 1, 1, 13, 1
      ],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        color: '#5470C6',
        width: 4,
        type: 'dashed'
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
}

export default {
  name: 'Chart',
  props: {
    id: {
      default: null,
      required: true
    }
  },
  data() {
    return {
      myChart: {}
    }
  },
  // watch: {
  //   myChart: {
  //     handler(val) {
  //       boxSelect(this.myChart, 2)
  //         .then((res) => {
  //           console.log('res')
  //           alert(res)
  //         })
  //         .catch((err) => {
  //           alert(`对框选${err}条数据进行计算`)
  //         })
  //     }
  //   }
  // },
  created() {
    /*
     *! w
     */ const a = '22'
  },
  mounted() {
    console.log(22)
    this.$nextTick(() => {
      let chartDom = document.getElementById(this.id)
      this.myChart = echarts.init(chartDom)
      console.log('MYCHART', this.myChart)
      option && this.myChart.setOption(option)

      // window.addEventListener('resize', function () {
      //   myChart.resize()
      //   console.log(2)
      // })
    })
  }
}
</script>

<template>
  <div :id="id" class="chart"></div>
</template>

<style>
.chart {
  position: absolute;
  top: 42px;
  right: 15px;
  bottom: 50px;
  left: 15px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  padding: 10px;
}
</style>
