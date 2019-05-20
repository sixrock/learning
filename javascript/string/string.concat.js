
//连接两个字符串字符串并返回新的字符串

function concat(str,str1) {
  var str2 = str + str1;
  return str2;
}
var str = "好好学习，";
var str1 = "天天向上！";
console.log("字符串1：" + str);
console.log("字符串2：" + str1);
console.log("新字符串：" + concat(str,str1));