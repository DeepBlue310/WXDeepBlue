const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getRandomNum(Min,Max){   
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
}

function swapItems(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

function scan_array(arr) {
  var str = '';
  for(var key in arr) {
    if(typeof(arr[key]) == 'array' || typeof(arr[key]) == 'object') {// 递归调用
      scan_array(arr[key]);
    } else {
      str = str + ' ' + arr[key];
    }
  }
  console.log(str);
}
//遍历数组顺序；
function arrayList(str) {
  var mathStr = [];
  for(var i=0;i<str.length;i++){
      var num1 = str[i];
      var numid1  = i;
      //console.log("i1:"+i);
      for(var i2=0;i2<str.length;i2++){
          if(i2 != numid1){
              //console.log("i2:"+i2);
              var num2 = str[i2];
              var numid2  = i2;
              for(var i3=0;i3<str.length;i3++){
                  if(i3 != numid1 && i3 != numid2){
                      //console.log("i3:"+i3);
                      var num3 = str[i3];
                      var numid3  = i3;
                      for(var i4=0;i4<str.length;i4++){
                          if(i4 != numid1 && i4 != numid2 && i4 != numid3){
                              //console.log("i4:"+i4);
                              var num4 = str[i4];
                              var aMathStr = {
                                  a:num1,
                                  b:num2,
                                  c:num3,
                                  d:num4};
                              if(isInAry(mathStr,aMathStr)){
                                  mathStr.push(aMathStr);
                              }
                          }
                      }
                  }
              }
          }
      }


  }
  return mathStr;
}
//检测重复；
function isInAry(arr,content){
  var w = '';
  for(var i; i<=arr.length;i++){
      if(content==arr[i]){
          w = i;
      }
  }
  return (w=='')? true:false;
}
//检测空值
function empty(a){
  if( a || String(a)=='0'){
      return true;
  }else{
      return false;
  }
}
//数组去重
function unique(arr) {
  var result = [], hash = {};
  for (var i = 0, elem; (elem = arr[i]) != null; i++) {
      if (!hash[elem]) {
          result.push(elem);
          hash[elem] = true;
      }
  }
  return result;
}
//生成随机数字
var appInstance = getApp();
function createRandomNum(){
  return Math.ceil(Math.random()*appInstance.globalData.maxNum);    
}

//穷举计算 生成符合规则的新题
function count(g){
  let newArr = [],answer = [], str = [createRandomNum(),createRandomNum(),createRandomNum(),createRandomNum()], countStr = arrayList(str),resultArr = [];
  for(var i =0; i<countStr.length ; i++){
      var x=countStr[i].a;
      var y=countStr[i].b;
      var z=countStr[i].c;
      var w=countStr[i].d;
      if (x+y+z+w==24){ var aResult = x+"+"+y+"+"+z+"+"+w;resultArr.push(aResult);}
      else if (x+y+z-w==24){ var aResult = x+"+"+y+"+"+z+"-"+w;resultArr.push(aResult);}
      else if ((x+y)*(z+w)==24){ var aResult = "("+x+"+"+y+")*("+z+"+"+w+")";resultArr.push(aResult);}
      else if ((x-y)*(z+w)==24){ var aResult = "("+x+"-"+y+")*("+z+"+"+w+")";resultArr.push(aResult);}
      else if ((x-y)*(z-w)==24){ var aResult = "("+x+"-"+y+")*("+z+"-"+w+")";resultArr.push(aResult);}
      else if ((x+y+z)*w==24){ var aResult = "("+x+"+"+y+"+"+z+")*"+w;resultArr.push(aResult);}
      else if ((x-y-z)*w==24){ var aResult = "("+x+"-"+y+"-"+z+")*"+w;resultArr.push(aResult);}
      else if ((x+y-z)*w==24){ var aResult = "("+x+"+"+y+"-"+z+")*"+w;resultArr.push(aResult);}
      else if ((x*y*z)/w==24){ var aResult = "("+x+"*"+y+"*"+z+")/"+w;resultArr.push(aResult);}
      else if (x*y*(z+w)==24){ var aResult = "("+x+"*"+y+")*("+z+"+"+w+")";resultArr.push(aResult);}
      else if (x*y*(z-w)==24){ var aResult = "("+x+"*"+y+")*("+z+"-"+w+")";resultArr.push(aResult);}
      else if (x*y*z-w==24){ var aResult = "("+x+"*"+y+")*("+z+")-"+w;resultArr.push(aResult);}
      else if (x*y*z+w==24){ var aResult = "("+x+"*"+y+")*("+z+")+"+w;resultArr.push(aResult);}
      else if (x*y*z*w==24){ var aResult = x+"*"+y+"*"+z+"*"+w;resultArr.push(aResult);}
      else if ((x+y)+(z/w)==24){ var aResult = "("+x+"+"+y+")+("+z+"/"+w+")";resultArr.push(aResult);}
      else if ((x+y)*(z/w)==24){ var aResult = "("+x+"+"+y+")*("+z+"/"+w+")";resultArr.push(aResult);}
      else if (x*y+z+w==24){ var aResult = "("+x+"*"+y+")+"+z+"+"+w;resultArr.push(aResult);}
      else if (x*y+z-w==24){ var aResult = "("+x+"*"+y+")+"+z+"-"+w;resultArr.push(aResult);}
      else if (x*y-(z/w)==24){ var aResult = "("+x+"*"+y+")-("+z+"/"+w+")";resultArr.push(aResult);}
      else if (x*y+(z/w)==24){ var aResult = "("+x+"*"+y+")-("+z+"/"+w+")";resultArr.push(aResult);}
      else if (x*y-z-w==24){ var aResult = "("+x+"*"+y+")-"+z+"-"+w;resultArr.push(aResult);}
      else if (x*y+(z*w)==24){ var aResult = "("+x+"*"+y+")+("+z+"*"+w+")";resultArr.push(aResult);}
      else if (x*y-(z*w)==24){ var aResult = "("+x+"*"+y+")-("+z+"*"+w+")";resultArr.push(aResult);}
      else if (x*y/(z*w)==24){ var aResult = "("+x+"*"+y+")/("+z+"*"+w+")";resultArr.push(aResult);}
      else if (x*y/(z-w)==24){ var aResult = "("+x+"*"+y+")/("+z+"-"+w+")";resultArr.push(aResult);}
      else if (x*y/(z+w)==24){ var aResult = "("+x+"*"+y+")/("+z+"+"+w+")";resultArr.push(aResult);}        
  }
  answer = unique(resultArr);
  if ((g=='初级' && answer.length >2) ||(g == '中级' && answer.length==2) || (g == '高级' && answer.length==1) ){                                      
      newArr = Array.from(str, x => String(x));
      return {answer:answer,nums:newArr}
  }     
}
module.exports = {
  formatTime: formatTime,
  getRandomNum: getRandomNum,
  swapItems: swapItems,
  scan_array: scan_array,
  count: count,
  empty: empty
}
