function map (arr,callback) {
  for (var i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return true;
    }
  }
  return false;
}
var arr = [1,2,3,3];
map(arr,function (value){
  return value > 2
})
