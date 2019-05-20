
//从后向前搜索字符串

function lastIndexOf (str,str1) {
  var n;
  var l;
  var p = 0;
  for(var i = 0; i <str.length; i++) {
    for(var o = 0; i < str1.length; o++) {
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
console.log(lastIndexOf(str,"12"))
