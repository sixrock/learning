
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
          if (j == partition.length) {
            arr[k] = i;
            k++;
          }
        }
      }
    }
    for (var l = 0; l < arr.length; l++) {
      for (var m = 0; m < arr[l]; m++) {
        arr1[0] += str[m];
      }
    }
    for (var n = 1; n < arr1.length; n++) {
      for (var o = 0; o < arr1[n].length; o++) {
        if (n > 1) {
          for (var p = arr[n - 1].length - 1 + partition.length; p < arr1[n].length; p++) {
            arr[n] = str[p];
          }
        }
      }
    }
    return arr1;
  }
}
var str = "12345612789124568";
console.log("原字符串：" + str);
console.log("分割后的字符串数组：" + split(str,"12"));