const itemsToSort = [2,3,4,7,1,0,6];
function quickSort(array) {
    if (array.length<2) return array;
    let pivotIndex = Math.floor(array.length/2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    array.forEach((value, index) => {
        if ( index !== pivotIndex ){
            value > pivot? greater.push(value): less.push(value);
        }
    });
    return [
        ...quickSort(less),
        pivot,
        ...quickSort(greater)
    ];
}


console.log(quickSort(itemsToSort));