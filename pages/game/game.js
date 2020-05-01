//葛世恒
Page({
  data: {
   start: "小游戏",
   slist: [
    { id: 1, name: "1024" },
    { id: 1, name: "第二类" },
    { id: 1, name: "第三类" },
    { id: 1, name: "第四类" },
    { id: 1, name: "第五类" },
   ],
   isstart: false,
  //  openimg: "/images/list/list.png",
  //  offimg: "/images/list/list1.png"
  },
  opens: function (e) {
   switch (e.currentTarget.dataset.item) {
    case "1":
     if (this.data.isstart) {
      this.setData({
       isstart: false,
      });
     }
     else {
      this.setData({
       isstart: true,
      });
     }
     break;
   }
  },
  onclicks1: function (e) {
   var index = e.currentTarget.dataset.index;
   let name = this.data.slist[index].name;
   console.log(name);
   if(name=="1024"){
    wx.navigateTo({
      url: '../game1024/game1024',
    })
  }
  // if(name=="24点"){
  //   wx.navigateTo({
  //     url: '../index/index',
  //   })
  // }
  }
 })
 
