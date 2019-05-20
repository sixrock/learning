
//返回某个指定的字符串值在字符串首次出现的位置

function indexOf (str,str1) {
  var number = str1.length;
  var str2 = "";
  for(i = 0;i <str.length; i++) {
  
    for(var n = 0; n < number; n++) {
      str2 += str[i+n];
    }
    if(str2 == str1) {
      return i;
    }else {
      str2 = "";
    }
  }
  return str2;
}
var str = "123456789你在干什么";
console.log("原字符串：" + str);
console.log("字符串所在的位置：" + indexOf(str,"7"));