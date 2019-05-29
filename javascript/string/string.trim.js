
//删除字符串的开头空格和结尾空格

function trim(str) {
  var re = "";
  var record = 0;
  for(var i = 0; i < str.length; i++) {
    if(str[i] != " ") {
      record = i;
      for(var j = str.length - 1; j > 0; j--) {
        if(str[j] != " ") {
          for(var k = record; k <= j; k++) {
            re += str[k];
            
          }
          return re;
        }
      }
    }
  }
  return re;
}
var str = "    12345  ";
console.log(str);
console.log("数组：" + trim(str));