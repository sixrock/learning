
//把字符串分割为字符串数组

function split (str, split) {
  var array = [];
  array[0] = "";
  for(var i = 0, j = 0; i < str.length; i++) {
    if(str[i] == split[0]) {
      var m = 1;
      for (; m <split.length; m++) {
        if(str[m + i] != split[m]) {
          break;
        }
      }
      if(m == split.length){
        j++;
        array[j] = "";
        i = i + split.length - 1;
      }else {
        array[j] += str[i];
      }
    }else {
      array[j] += str[i];
    }
  }
  return array;
}
console.log(split("1,,;2,,389,,;454",",,;"));