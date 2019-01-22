var itemsToSort = [2, 3, 4, 7, 1, 0, 6];
function quickSort(array) {
    if (array.length < 2)
        return array;
    var pivotIndex = Math.floor(array.length / 2);
    var pivot = array[pivotIndex];
    var less = [];
    var greater = [];
    array.forEach(function (value, index) {
        if (index !== pivotIndex) {
            value > pivot ? greater.push(value) : less.push(value);
        }
    });
    return quickSort(less).concat([
        pivot
    ], quickSort(greater));
}
console.log(quickSort(itemsToSort));
