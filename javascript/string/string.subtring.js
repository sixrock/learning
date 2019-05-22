
//提取字符串中两个指定的索引号之间的字符

function substring(str, start, length) {
  var str1 = "";
  if (arguments.length = 3 && typeof length == "number" && typeof start == "number" && start < length && str.length > length && start > 0) {
    for (var i = start; i < length; i++) {
      str1 += str[i];
    }
    return str1;
  } if (arguments.length = 2 && start < str.length && start > 0 && typeof start == "number") {
    for (var i = start; i < str.length; i++) {
      str1 += str[i];
    }
    return str1;
  }
}
var str = "0123456789";
console.log(substring(str, 2));