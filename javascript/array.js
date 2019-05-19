// function sort (number) {
//   var n;
//   for (var i =0; i < number.length; i++) {
//     for (var m = i+1;m < number.length;m++) {
//       if (number[i] < number[m]) {
//         n = number[m];
//         number[m] = number[i];
//         number[i] = n;
//       }
//     }
//   }
//   return number;
// }
// var number = [10,12,18,85,94];
// console.log(number);
// console.log(sort(number));

//合并数组

// function max (number1,number2) {
//   var m =number1.length
//   for(var i =  0; i < number2.length; i++) {
//     number1[m + i] = number2[i];
//   }
//   return number1;
// }
// var number1 = [1,2,3,4];
// var number2 = [5,6,7];
// var arr = max(number1,number2)
// console.log(arr.length);

//检测数组是否符合条件

// function filter  (number,number1) {
//   var number3 =0;
//   var number2 = [];
//   for (var i = 0; i < number.length; i++) {
//     if(number[i] > number1) {
//       number2[number3] = number[i]
//       number3 = number3 + 1;
//     }
//   }
//   return number2;
// }
// var number = [10,12,9,8,7,54];
// console.log(filter(number,10));

//搜索数组元素返回所在值

// function indexOf  (number,number1,number4) {
//   var number2 =[];
//   var number3 = 0;
//   for(var i = number4; i < number.length; i++) {
//     if (number[i] == number1) {
//       number2[number3] = i;
//       number3 = number3 + 1;
//     }
//   }
//   return number2;
// }
// var number = ["你","我","他","它"];
// console.log(indexOf (number,"他",1));

// 把数组的所有元素放到同一个字符串

// function join (number) {
//   var string = "";
//   for(var number1 in number) {
//     string += number[number1] + ",";
//   }
//     string[string.length] = "";
//   return string;
// }
// var arr = [1,2,3,4,5,6];
// console.log(join(arr));

//返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索

// function lastIndexOf (number,number1,number2) {
//   var number3;
//   var number4 = 0;
//   for(var i = number.length-1; i > number2; i--) {
//     if(number[i] == number1) {
//       number3 = i;
//       return number3;
//     }
//   }
//   return number3;
// }
// var arr = [10,12,15,18];
// console.log(lastIndexOf(arr,15,0));

//删除数组的最后一个元素并返回数组的值

// function pop (number) {
//   var number1 = number[number.length-1];
//   number.length = number.length - 1;
//   return number1;
// }
// var arr = ["你","在","干","什","么","！"];
// console.log(pop(arr));
// console.log(arr);

//向数组末位添加一个元素并返回添加的长度

// function push(number, number1) {
//   number[number.length] = number1;
//   return number.length;
// }
// var arr = ["12","15","78","98"];
// console.log(push(arr,"12"));
// console.log(arr);

//翻转数组的顺序

function reverse(number) {
  var n = number.length-1
  var m;
  for (var i = 0; i <= n / 2; i++) {
    m = number[i];
    number[i] = number[n];
    number[n] = m;
    n = n-1;
  }
  return number;
}
var arr = [12,13,14,15,16,18];
console.log(reverse(arr));