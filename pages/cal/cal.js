// pages/com/com.js
//注释为“昊”的主要为高渊昊同学，注释为“恒”的为葛世恒同学
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
    screenData: "",
    result: "",
    LastIsOperate: "0",
    logs: [],
    //恒
    // isPopping: false,//是否已经弹出
    //   //animPlus: {},//旋转动画
    //   animCollect: {},//item位移,透明度
    //   animTranspond: {},//item位移,透明度
    //   animInput: {},//item位移,透明度
    //   iconA: "",
    //   iconB: "",
    //   iconC: ""
  },
  //恒
  // properties: {
  //   iconA: {
  //       type: String,
  //       value: ""
  //   },
  //   iconB: {
  //       type: String,
  //       value: ""
  //   },
  //   iconC: {
  //       type: String,
  //       value: ""
  //   }
  // },
  // //恒
  // attached: function(){
  //   let that = this;
  //   this.setData({
  //       iconA: that.properties.iconA,
  //       iconB: that.properties.iconB,
  //       iconC: that.properties.iconC
  //   })
  // },

  // //恒
  //  _moreBtn: function () {
  //       this._plus();
  // },
  //  //恒
  // //点击弹出
  // _plus: function () {
  //       if (!this.data.isPopping) {
  //           this._popp();
  //           this.setData({
  //               isPopping: true
  //           })
  //       }
  //       else {
  //           this._takeback();
  //           this.setData({
  //               isPopping: false
  //           });
  //       }
  // },
  // //恒
  // _clickA: function () {
  //       this.triggerEvent("clickA");
  //       this._plus();
  // },
  // //恒
  // _clickB: function () {
  //       this.triggerEvent("clickB");
  //       this._plus();
  // },
  // //恒
  // _clickC: function () {
  //       this.triggerEvent("clickC");
  //       this._plus();
  // },
  // //恒
  //   //弹出动画
  // _popp: function () {
  //       //plus顺时针旋转
  //       // let animationPlus = wx.createAnimation({
  //       //     duration: 500,
  //       //     timingFunction: 'ease'
  //       // })
  //       let animationcollect = wx.createAnimation({
  //           duration: 500,
  //           timingFunction: 'ease'
  //       })
  //       let animationTranspond = wx.createAnimation({
  //           duration: 500,
  //           timingFunction: 'ease'
  //       })
  //       let animationInput = wx.createAnimation({
  //           duration: 500,
  //           timingFunction: 'ease'
  //       })
  //       //animationPlus.rotateZ(180).step();
  //       animationcollect.translate(18, -120).rotateZ(0).opacity(1).step();
  //       animationTranspond.translate(-80, -50).rotateZ(0).opacity(1).step();
  //       animationInput.translate(18, 20).rotateZ(0).opacity(1).step();
  //       this.setData({
  //           //animPlus: animationPlus.export(),
  //           animCollect: animationcollect.export(),
  //           animTranspond: animationTranspond.export(),
  //           animInput: animationInput.export(),
  //       })
  // },

  //昊
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //昊
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  //昊
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  //昊
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  //昊
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  //昊
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },
  //昊
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  //昊
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  history: function() {
    //昊
    wx.navigateTo({
      url: '../history/history',
    })
    // //恒
    // this._takeback();
    //   this.setData({
    //      isPopping: false
    //   });
  },

  more: function() {
    //昊
    wx.navigateTo({
      url: '../morecal/morecal',
    })
    // //恒
    // this._takeback();
    //   this.setData({
    //      isPopping: false
    //   });
  },

  number_conversion: function() {
    wx.navigateTo({
      url: '/pages/number-conversion/number-conversion',
    })
    // this._takeback();
    //   this.setData({
    //      isPopping: false
    //   });
  },

  // //恒
  // //收回动画
  // _takeback: function () {
  //   //plus逆时针旋转
  //   // var animationPlus = wx.createAnimation({
  //   //     duration: 500,
  //   //     timingFunction: 'ease-out'
  //   // })
  //   var animationcollect = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'ease-out'
  //   })
  //   var animationTranspond = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'ease-out'
  //   })
  //   var animationInput = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'ease-out'
  //   })
  //   //animationPlus.rotateZ(0).step();
  //   animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
  //   animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
  //   animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
  //   this.setData({
  //       //animPlus: animationPlus.export(),
  //       animCollect: animationcollect.export(),
  //       animTranspond: animationTranspond.export(),
  //       animInput: animationInput.export(),
  //   })
  // }, 

  //昊
  clickme: function(event) {
    var id = event.target.id
    var sd = this.data.screenData
    var data, re
    if ((id == "÷" || id == "×" || id == "+" || id == "-" || id == ".") && this.data.LastIsOperate == 1)
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
    if (id == "÷" || id == "×" || id == "+" || id == "-" || id == ".")
      this.setData({
        LastIsOperate: 1
      })
    else
      this.setData({
        LastIsOperate: 0
      })

    if (id == '=') {
      this.data.logs.push(data + this.data.result)
      wx.setStorageSync('callogs', this.data.logs)
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