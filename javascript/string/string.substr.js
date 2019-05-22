
//从开始索引提取字符串中指定数目的字符
// var a = 1;
// if(typeof a == "undefined") {
//   console.log(true);
// }else {
//   console.log(false);
// }

function substr(str, start, length) {
  var add = start + length;
  var str1 = "哈哈";
  if (arguments.length = 2 && typeof length == "number" && typeof start == "number" && start + length < str.length && start > 0 && length > 0) {
    for (var i = start; i < add; i++) {
      str1 += str[i];
    }
    return str1;
  } else {
    return str1;
  } 
  
}
var str = "123456";
console.log(substr(str, 3, 2));
