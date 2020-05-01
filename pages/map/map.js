/*高渊昊*/
// pages/map/map.js
var cal = require('../../utils/rpn.js')
var charts = require('../../utils/wxcharts.js')
var lineChart=null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lower: "",
    upper: "",
    expression: "",
  },

  touchHandler: function(e) {

    console.log(lineChart.getCurrentDataIndex(e));

    lineChart.showToolTip(e, {

      // background: '#7cb5ec',

      format: function(item, category) {

        return category + ' ' + item.name + ':' + item.data

      }

    });

  },


  onLoad: function(e) {

    

  },
  expression: function(e) {
    this.setData({
      expression: e.detail.value
    })
    console.log(this.data.expression)
  },
  lower: function(e) {
    this.setData({
      lower: e.detail.value
    })
    console.log(this.data.lower)
  },
  upper: function(e) {
    this.setData({
      upper: e.detail.value
    })
    console.log(this.data.upper)
  },
  clickeme: function() {
    var expression = this.data.expression
    var lower = Number(this.data.lower)
    var upper = Number(this.data.upper)
    var x = []
    var y = []
    var windowWidth = this.data.windowWidth
    expression = expression.replace(/cos/g, "o")
    expression = expression.replace(/sin/g, "i")
    expression = expression.replace(/tan/g, "t")
    expression = expression.replace(/ln/g, "n")
    expression = expression.replace(/log/g, "g")
    console.log(expression)
    cal.coordinate(expression, lower, upper, x, y)
    var windowWidth = 400;
    var windowHeight=300
    try {

      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
      windowHeight=0.4*res.windowHeight

    } catch (e) {

      console.error('getSystemInfoSync failed!');

    }

    console.log(windowWidth)
    lineChart = new charts({

      canvasId: 'lineCanvas',

      type: 'line',

      categories: x,

      animation: true,

      background: '#f5f5f5',

      series: [{

        name: 'x',

        data: y,

        format: function (val, name) {

          return val.toFixed(2) ;

        }

      }],
      xAxis: {
        title: 'x轴',

        disableGrid: true

      },

      yAxis: {

        title: 'y轴',

        format: function (val) {

          return val.toFixed(2);

        },

        min: 0

      },

      width: windowWidth,

      height: windowHeight,

      dataLabel: false,

      dataPointShape: true,

      extra: {

        lineStyle: 'curve'

      }

    });
  }
})