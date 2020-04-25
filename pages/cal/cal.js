// pages/com/com.js
var cal = require('rpn.js')
Page({

  /**
   * 页面的初始数据
   */
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
    screenData: "",
    result: "",
    LastIsOperate: "0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  history:function(){
    wx.navigateTo({
      url: '../history/history',
    })
  },
  
  more: function () {
    wx.navigateTo({
      url: '../../more/more',
    })
  },

  clickme: function (event) {
    console.log(event.target.id)
    var id = event.target.id
    var sd = this.data.screenData
    var data, re
    if ((id == "÷" || id == "×" || id == "+" || id == "-"||id==".") && this.data.LastIsOperate == 1)
      return
    if ((id == "÷" || id == "×" || id == "+") && sd.length == 0)
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
      if (sd == 0)
        return
      else
        data = sd.substr(0, sd.length - 1)
      if (id == '=') {
        this.setData({
          screenData: this.data.result
        })
        this.setData({
          result: ""
        })
        re = 0
      } else {
        if (id >= 0 && id <= 9 && data.length > 1) {
          re = cal.calCommonExp(data)
          this.setData({
            result: re
          })
          this.setData({
            screenData: data
          })
        } else {
          this.setData({
            screenData: data
          })
          re = cal.calCommonExp(data)
          this.setData({
            result: re
          })
        }
      }
    } else if (sd == 0) {
      data = id
    } else
      data = sd + id
    if (id == "÷" || id == "×" || id == "+" || id == "-"||id==".")
      this.setData({
        LastIsOperate: 1
      })
    else
      this.setData({
        LastIsOperate: 0
      })

    if (id == '=') {
      this.setData({
        screenData: this.data.result
      })
      this.setData({
        result: ""
      })
      re = 0
    } else {
      if (id >= 0 && id <= 9 && data.length > 1) {
        re = cal.calCommonExp(data)
        this.setData({
          result: re
        })
        this.setData({
          screenData: data
        })
      } else {
        this.setData({
          screenData: data
        })
      }
    }
  }
})