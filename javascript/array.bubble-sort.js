function bubbleSort(arr) {
    var i = arr.length, j;
    var tempExchangVal;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
        i--;
    }
    return arr;
}
 
var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
console.log(arr);
var arrSorted = bubbleSort(arr);
console.log(arrSorted);
