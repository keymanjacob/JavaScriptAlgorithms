const list = [1,2,3,4,5,6,7,8,9,11,32,34,56,67,109];

function binarySearch( array, target ) {
    let low = 0;
    let high = array.length-1;
    let counter = 0;

    while (low<=high) {
        counter++;
        let mid = Math.floor((low+high)/2);
        let guess = array[mid];
        if (guess ===  target) return true;
        if (guess < target ) low = mid + 1;
        else high = mid - 1;
    }
    console.log(counter);
    return false;
}

console.log (binarySearch(list, 34));