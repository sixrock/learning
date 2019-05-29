
//提取字符串的片断，并在新的字符串中返回被提取的部分

function slice (str,sign,sign1) {
  if(str.length > sign1 && sign1 > sign) {
    var str1 = "";
  for(sign; sign <sign1; sign++) {
    str1 += str[sign];
  } 
  return str1;
  }else {
    return "";
  }
}
var str = "123456"
console.log("原字符串：" + str)
console.log("提取的字符串：" + slice(str,2,4));
