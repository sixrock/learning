
// 数组排序

function sort(number) {
  var n;
  for (var i = 0; i < number.length; i++) {
    for (var m = i + 1; m < number.length; m++) {
      if (number[i] < number[m]) {
        n = number[m];
        number[m] = number[i];
        number[i] = n;
      }
    }
  }
  return number;
}
var number = [10, 12, 18, 85, 94];
console.log("原数组：" + number);
console.log("排序后的数组：" + sort(number));

//合并数组

function max(number1, number2) {
  var m = number1.length
  for (var i = 0; i < number2.length; i++) {
    number1[m + i] = number2[i];
  }
  return number1;
}
var number1 = [1, 2, 3, 4];
var number2 = [5, 6, 7];
console.log("原数组：" + number1);
console.log("被合并的数组：" + number2);
console.log("合并后的数组：" + max(number1, number2));

// 检测数组是否符合条件返回所有符合元素的数组

function filter(number, number1) {
  var number3 = 0;
  var number2 = [];
  for (var i = 0; i < number.length; i++) {
    if (number[i] > number1) {
      number2[number3] = number[i]
      number3 = number3 + 1;
    }
  }
  return number2;
}
var arr = [10, 12, 9, 8, 7, 54];
console.log("原数组：" + arr)
console.log("符合元素的数组：" + filter(arr, 10));

// 搜索值在数组中第一次出现的位置

function indexOf(number, number1) {
  var number2;
  for (var i = 0; i < number.length; i++) {
    if (number[i] == number1) {
      number2 = i;
      return number2;
    }
  }
  return number2;
}
var arr = ["你", "我", "他", "他"];
console.log("原数组：" + arr)
console.log("元素第一次出现的位置：" + indexOf(arr, "他"));

// 把数组的所有元素放到同一个字符串

function join(number) {
  var string = "";
  for (var number1 in number) {
    string += number[number1] + ",";
  }
  string[string.length] = "";
  return string;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log("原数组：" + arr);
console.log("合并之后的字符串：" + join(arr));

//从数组最后一个元素开始搜索到指定位置结束并返回该元素的位置

function lastIndexOf(number, number1, number2) {
  var number3;
  var number4 = 0;
  for (var i = number.length - 1; i > number2; i--) {
    if (number[i] == number1) {
      number3 = i;
      return number3;
    }
  }
  return number3;
}
var arr = [10, 12, 15, 18];
console.log("元素出现的最后一个位置：" + lastIndexOf(arr, 15, 0));

//删除数组的最后一个元素并返回数组的值

function pop(number) {
  var number1 = number[number.length - 1];
  number.length = number.length - 1;
  return number1;
}
var arr = ["你", "在", "干", "什", "么", "！"];
console.log("原数组：" + arr);
console.log("删除的元素：" + pop(arr));
console.log(arr);

//向数组末位添加一个元素并返回添加的长度

function push(number, number1) {
  number[number.length] = number1;
  return number.length;
}
var arr = ["12", "15", "78", "98"];
console.log("原数组：" + arr);
console.log("返回push之后数组的长度" + push(arr, "12"));
console.log("push操作之后的数组：" + arr);

//翻转数组的元素顺序

function reverse(number) {
  var number1 = number.length;
  var number2;
  for (var i = 0; i < number.length / 2; i++) {
    number2 = number[i]
    number[i] = number[number1];
    number[number1] = number2;
    number1 = number1 - 1;
  }
  return number;
}
var arr = [10, 12, 13];
console.log("原数组：" + arr);
console.log("翻转后的数组：" + reverse(arr));

//删除数组的第一个元素

function shift(number) {
  for (var i = 0; i < number.length; i++) {
    number[i] = number[i + 1];
  }
  number.length = number.length - 1;
  return number;
}
var arr = [10, 11, 12, 13, 14, 15];
console.log("原数组：" + arr);
console.log("删除第一个元素后的数组：" + shift(arr));

//选取数组的一部分并返回新数组

function slice(number, number1, number2) {
  number3 = [];
  number4 = 0;
  for (var i = number1; i < number2; i++) {
    number3[number4] = number[i];
    number4++;
  }
  return number3;
}
var arr = [10,11,12,13,14,15,16];
console.log("原数组:" + arr);
console.log("选取的数组:" + slice(arr,1,5));

// 通过指定函数处理数组的每个元素，并返回处理后的数组

function map (number,number1) {
  for(var i = 0; i < number.length; i++) {
    if(number1(number[i])){
      return true;
    }
  }
  return false;
}
var arr = [8,9,10,11,12,13];
function test (age) {
  return age >= 10;
}
console.log("原数组：" + arr);
console.log("是否符合条件：" + map(arr,test));