// pages/di/di.js
/*高渊昊*/
var cal = require('../../utils/rpn.js')
Page({
  data: {
    focus: false,
    expression:'',
    lower: '',
    upper:'',
    sum:'结果在这里显示'
  },
  expression:function(e){
    this.setData({expression:e.detail.value})
    console.log(this.data.expression)
  },
  lower: function (e) {
    this.setData({ lower: e.detail.value })
    console.log(this.data.lower)
  },
  upper: function (e) {
    this.setData({ upper: e.detail.value })
    console.log(this.data.upper)
  },
  clickeme : function(){
    var expression=this.data.expression
    var lower=Number(this.data.lower)
    var upper=Number(this.data.upper)
    expression = expression.replace(/cos/g, "o")
    expression = expression.replace(/sin/g, "i")
    expression = expression.replace(/tan/g, "t")
    expression = expression.replace(/ln/g, "n")
    expression = expression.replace(/log/g, "g")
    console.log(expression)
    var sum=cal.integral(expression,lower,upper)
    console.log(sum.toFixed(2))
    this.setData({sum:sum})
  }
})