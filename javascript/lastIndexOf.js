
function lastIndexOf(str, searchStr) {
  var pos = -1;
  if (str.length >= searchStr.length) {
    for (var i = 0; i < str.length; i++) {
      var j = 0;
      if (i + searchStr.length <= str.length) {
        for (; j < searchStr.length; j++) {
          if (str[i + j] != searchStr[j]) break;
        }  
      }
      if (j == searchStr.length) pos = i;
    }  
  }
  return pos;
}

console.log(lastIndexOf('ewr2343232kl34', '32'));
