var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 32, 34, 56, 67, 109];
function binarySearch(array, target) {
    var low = 0;
    var high = array.length - 1;
    var counter = 0;
    while (low <= high) {
        counter++;
        var mid = Math.floor((low + high) / 2);
        var guess = array[mid];
        if (guess === target)
            return true;
        if (guess < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    console.log(counter);
    return false;
}
console.log(binarySearch(list, 34));
