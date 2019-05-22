
//删除字符串的开头空格和结尾空格

function jrim(str) {
  var k = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
        for(var j = 0; j < i; j++) {
          str[j] = "";
        }
        break;
    }
  }
  for (var k = str.length - 1; k > 0; k--) {
    if (str[k] != " ") {
      for(var l = k; l < str.length; k++) {
        str[l] = "";
      };
    }
  }
  return str;
}
var str = " 12345";
console.log("数组：" + jrim(str));