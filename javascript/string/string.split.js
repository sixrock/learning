
//把字符串分割为字符串数组

function split(str, partition) {
  var arr = [];
  var arr1 = [];
  var k = 0
  if (str.length == partition.length) {
    return arr;
  } else {
    for (var i = 0; i < str.length; i++) {
      if (str[i] == str[0]) {
        for (var j = 0; j < partition.length; j++) {
          if (str[i + j] == partition[j] && j == length - 1) {
            arr[k] = i;
            k++;
          } else {
            break;
          }
        }
      }
    }
    for (var l = 0; l < arr.length; l++) {
      var m = 0;
      if(l == 0) {
      for (m; m < arr[l]; m++) {
        arr1[0] += str[m];
      }
    }else {
      for(var n = arr1[l - 1].length + partition.length; n < arr[l];n++) {

      }
    }
    }
    for (var n = 0; n < arr1.length; n++) {
      for (var o = 0; o < arr1[n].length; o++) {
        if(i > 1) {
          for (var p = arr[n-1].length + partition.length - 1; p < arr[n].length; p++) {
            arr[n] += str[p];
        }
      }
      }
    }
    return arr1;
  }
}
var str = "12345612789124568";
console.log("原字符串：" + str);
console.log("分割后的字符串数组：" + split(str, "12"));

function split(str,partition) {
  var k = 0;
  var arr1 = [];
  var arr = [];
  for(var i = 0; i <str.length; i++) {
    if(str[i] = partition[0]) {
      for(var j = 0; j < partition.length; j++) {
        if (str[i + j] == partition[j] && j == length - 1) {
          arr[k] = i;
          k++;
          arr[k] = i + partition.length;
          k++;
        } else {
          break;
        }
      }
    }
  }
  for(var k = 0; k < arr.length;k++) {
    if(k == 0) {
      for(var l = 0; l < arr[k]; l++) {
        arr1[0] += str[l];
      }
    } if(k == arr.length - 1) {
      arr1[]
    }
  }
}
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