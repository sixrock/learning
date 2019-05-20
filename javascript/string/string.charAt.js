
//返回指定位置的字符

function charAt(str,place) {
  var char = str[place];
  return char;
}
var str = "好好学习，天天向上！";
console.log("字符串的值：" + str);
console.log("返回指定位置的字符：" + charAt(str,2));