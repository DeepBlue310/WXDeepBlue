// pages/com/com.js
var cal = require('../../utils/rpn.js')
Page({

  /**
   * 页面的初始数据
   */
  //昊
  data: {
    id1: "clear",
    id2: "÷",
    id3: "×",
    id4: "delete",
    id5: "7",
    id6: "8",
    id7: "9",
    id8: "+",
    id9: "4",
    id10: "5",
    id11: "6",
    id12: "-",
    id13: "1",
    id14: "2",
    id15: "3",
    id16: "more",
    id17: ".",
    id18: "0",
    id19: "=",
    id20: "history",
    id21: "z",
    id22: "!",
    id23: "s",
    id24: "c",
    id25: "^",
    id26: "i",
    id27: "o",
    id28: "t",
    id29: "n",
    id30: "g",
    id31: "(",
    id32: ")",
    id33: Math.E.toFixed(10),
    id34: Math.PI.toFixed(10),
    id35: "r",
    screenData: "",
    result: "",
    LastIsOperate: "0",
    logs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //昊
  history: function() {
    wx.navigateTo({
      url: '../history/history',
    })
  },
  //昊
  more: function() {
    wx.navigateTo({
      url: '../morecal/morecal',
    })
  },
  unshow: function(data) {
    console.log("unshow:" + data)
    var temp = data.replace(/cos/g, "o")
    temp = temp.replace(/sin/g, "i")
    temp = temp.replace(/tan/g, "t")
    temp = temp.replace(/ln/g, "n")
    temp = temp.replace(/log/g, "g")
    if (temp.length > 5) {
      temp = temp.replace(/^(-1)/g, "/")
      temp = temp.replace(/^(2)/g, "s")
      temp = temp.replace(/^(3)/g, "c")
      temp = temp.replace(/^(0.5)/g, "r")
    }
    console.log("unshow:" + temp)
    return temp
  },
  show: function(data) {
    console.log(data)
    var temp = data.replace(/s/g, "^(2)")
    temp = temp.replace(/c/g, "^(3)")
    temp = temp.replace(/z/g, "^(-1)")
    temp = temp.replace(/r/g, "^(0.5)")
    temp = temp.replace(/n/g, "ln")
    temp = temp.replace(/i/g, "sin")
    temp = temp.replace(/o/g, "cos")
    temp = temp.replace(/g/g, "log")
    temp = temp.replace(/t/g, "tan")
    console.log(temp)
    return temp
  },
  //昊
  clickme: function(event) {
    var id = event.target.id
    var sd = this.unshow(this.data.screenData.toString())
    console.log(sd)
    var data, re
    if ((id == "÷" || id == "×" || id == "+" || id == "-" || id == ".") && this.data.LastIsOperate == 1)
      return
    if ((id == "÷" || id == "×" || id == "+" || id == "!" || id == ")" || id == "/" || id == "s" || id == "c" || id == "p" || id == "r") && sd.length == 0)
      return
    if (id == "clear") {
      this.setData({
        screenData: ""
      })
      this.setData({
        result: ""
      })
      return
    }
    if (id == "delete") {
      if (sd == 0) {
        return
      } else
        data = sd.substring(0, sd.length - 1)
      if (id == '=') {
        this.setData({
          screenData: this.data.result
        })
        this.setData({
          result: ""
        })
        re = 0
      } else {
        if (((data[data.length - 1] >= 0 && data[data.length - 1] <= 9) || cal.afterisFunction(data[data.length - 1]) || data[data.length - 1] == ")") && data.length > 1) {
          re = cal.calCommonExp(data)
          this.setData({
            result: re
          })
          data = this.show(data)
          this.setData({
            screenData: data
          })
          data = this.unshow(data)
        } else {
          data = this.show(data)
          this.setData({
            screenData: data
          })
          data = this.unshow(data)
        }
      }
    } else if (sd == 0) {
      data = id
    } else
      data = sd + id
    if (id == "÷" || id == "×" || id == "+" || id == "-" || id == ".")
      this.setData({
        LastIsOperate: 1
      })
    else
      this.setData({
        LastIsOperate: 0
      })

    if (id == '=') {
      data = this.show(data)
      this.data.logs.push(data + this.data.result)
      data = this.unshow(data)
      wx.setStorageSync('callogs', this.data.logs)
      this.setData({
        screenData: this.data.result
      })
      this.setData({
        result: ""
      })
      re = 0
    } else {
      if (((id >= 0 && id <= 9) || cal.afterisFunction(id) || id == ")") && data.length > 1) {
        re = cal.calCommonExp(data)
        console.log("226:" + data)
        this.setData({
          result: re
        })
        data = this.show(data)
        this.setData({
          screenData: data
        })
        data = this.unshow(data)
      } else {
        data = this.show(data)
        this.setData({
          screenData: data
        })
        data = this.unshow(data)
      }
    }
  }
})