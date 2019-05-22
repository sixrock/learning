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
console.log(slice(str,2,4));
