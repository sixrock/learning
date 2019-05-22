
//获取字符串最后出现的位置

function lastIndexOf (str,str1) {
  var n;
  var l;
  var p = 0;
  for(var i = 0; i <str.length; i++) {
    for(var o = 0; o < str1.length; o++) {
      n += str[i + o];
    }
    if(n == str1) {
      l[p] = i;
      p++;
    }else{
      n = "";
    }
  }
  return l[p];
}
str = "123451289"
console.log("原字符串：" + str);
console.log("最后出现的位置：" + lastIndexOf(str,"12"))
