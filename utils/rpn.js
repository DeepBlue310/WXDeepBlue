/*高渊昊*/
function isOperator(value) {
  var operatorString = '+-*/()×÷';
  return operatorString.indexOf(value) > -1;
}

function isFunction(value) {
  var functionString = "sc!zr^iotng";
  return functionString.indexOf(value) > -1;
}

function beforeisFunction(value) {
  var functionString = "^iotng";
  return functionString.indexOf(value) > -1;
}

function afterisFunction(value) {
  var functionString = "sc!zr";
  return functionString.indexOf(value) > -1;
}

function getPrioraty(value) {
  if (value == '-' || value == '+') {
    return 1;
  } else if (value == '*' || value == '/' || value == '×' || value == '÷') {
    return 2;
  } else {
    if (isFunction(value))
      return 3;
    else
      return 0;
  }
}

function prioraty(v1, v2) {
  return getPrioraty(v1) <= getPrioraty(v2);
}

function outputRpn(exp) {
  var inputStack = [];
  var outputStack = [];
  var outputQueue = [];
  var beforeisfunction = [];
  var minus
  exp.replace(/\s/g, '');
  if (exp[0] == "-") {
    minus = exp[0]
    exp = exp.substring(1)
  }
  for (var i = 0, max = exp.length; i < max; i++) {
    if (!isOperator(exp[i]) && !isOperator(exp[i - 1]) && (i != 0) && !isFunction(exp[i]) && !isFunction(exp[i - 1])) {
      inputStack[inputStack.length - 1] = inputStack[inputStack.length - 1] + exp[i] + '';
    } else {
      inputStack.push(exp[i]);
    }
  }
  if (minus == "-") {
    inputStack[0] = -inputStack[0]
  }
  while (inputStack.length > 0) {
    var cur = inputStack.shift();
    if (isOperator(cur) || isFunction(cur)) {
      if (cur == '(') {
        outputStack.push(cur);
      } else if (cur == ')') {
        var po = outputStack.pop();
        while (po != '(' && outputStack.length > 0) {
          outputQueue.push(po);
          po = outputStack.pop();
        }
      } else {
        while (prioraty(cur, outputStack[outputStack.length - 1]) && outputStack.length > 0) {
          outputQueue.push(outputStack.pop());
        }
        outputStack.push(cur)
      }
    } else
      outputQueue.push(Number(cur));
  }
  if (outputStack.length > 0) {
    while (outputStack.length > 0) {
      outputQueue.push(outputStack.pop());
    }
  }
  return outputQueue;
}

function calRpnExp(rpnArr) {
  var stack = [];
  var isfunction = [];
  for (var i = 0, max = rpnArr.length; i < max; i++) {

    if (!isOperator(rpnArr[i]) && !isFunction(rpnArr[i])) {
      stack.push(rpnArr[i]);
    } else {
      if (isFunction(rpnArr[i])&&rpnArr[i]!="^") {
        var num1 = stack.pop();
        var num
        if (rpnArr[i] == "r")
          num = Math.pow(num1, 0.5)
        if (rpnArr[i] == "/")
          num = 1 / num1;
        if (rpnArr[i] == "!") {
          var temp = 1
          for (var j = 1; j <= num1; j++)
            temp = j * temp
          num = temp
        }
        if (rpnArr[i] == "s") {
          num = Math.pow(num1, 2)
        }
        if (rpnArr[i] == "c")
          num = Math.pow(num1, 3)
        if (rpnArr[i] == "o")
          num = Math.cos(num1)
        if (rpnArr[i] == "i")
          num = Math.sin(num1).toFixed(2)
        if (rpnArr[i] == "t")
          num = Math.tan(num1)
        if (rpnArr[i] == "n")
          num = Math.log(num1)
        if (rpnArr[i] == "g")
          num = Math.log10(num1)

      } else {
        var num1 = stack.pop();
        if(stack.length>0){
          var num2 = stack.pop();
          if (rpnArr[i] == '-') {
            var num = num2 - num1;
          } else if (rpnArr[i] == '+') {
            var num = num2 + num1;
          } else if (rpnArr[i] == '*' || rpnArr[i] == '×') {
            var num = num2 * num1;
          } else if (rpnArr[i] == '/' || rpnArr[i] == '÷') {
            var num = num2 / num1;
          } else if (rpnArr[i] == "^") {
            var num = Math.pow(num2, num1)
          }
        }
        else{
          var num2=0; 
          var num3=1;
          if (rpnArr[i] == '-') {
            var num = num1 - num2;
          } else if (rpnArr[i] == '+') {
            var num = num1 + num2;
          } else if (rpnArr[i] == '*' || rpnArr[i] == '×') {
            var num = num1 * num3;
          } else if (rpnArr[i] == '/' || rpnArr[i] == '÷') {
            var num = num1 / num3;
          } else if (rpnArr[i] == "^") {
            var num = Math.pow(num1, num3)
          }
        }
      }
      stack.push(num);
    }
  }

  return stack[0];
}

function calCommonExp(exp) {
  var rpnArr = outputRpn(exp);
  return calRpnExp(rpnArr)
}

function integral(expression, lower, upper) {
  var sum = 0
  var interval = 0.001
  for (var i = lower; i <= upper; i = i + interval) {
    var temp = expression
    temp = temp.replace(/x/g, i)
    var rpnArr = outputRpn(temp)
    var x=calRpnExp(rpnArr)
    sum += calRpnExp(rpnArr) * interval 
  }
  return sum
}

function coordinate(expression, lower, upper, x, y) {
  var interval = 0.1
  var number = (upper - lower) / interval
  for (var i = 0; i <= number; i++) {
    x[i] = (lower + i * interval).toFixed(2)
    var temp = expression
    temp = temp.replace(/x/g, x[i])
    var rpnArr = outputRpn(temp)
    y[i] = calRpnExp(rpnArr)
  }
  return
}
//已经添加完export，在外面直接调用
module.exports = {
  calCommonExp: calCommonExp,
  isFunction: isFunction,
  integral: integral,
  coordinate: coordinate,
  afterisFunction:afterisFunction
}