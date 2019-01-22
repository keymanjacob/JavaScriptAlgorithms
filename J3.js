var itemsToSort = [2, 3, 4, 7, 1, 0, 6];
function findLargestValue(list) {
    var lrg = list[0];
    var indexOfLarge = 0;
    for (var i = 1; i <= list.length; i++) {
        if (lrg < list[i]) {
            lrg = list[i];
            indexOfLarge = i;
        }
    }
    return indexOfLarge;
}
function selectionSort(list) {
    var newList = [];
    var lrgItem;
    while (list.length) {
        lrgItem = findLargestValue(list);
        newList.push(list[lrgItem]);
        list.splice(lrgItem, 1);
    }
    return newList;
}
console.log(selectionSort(itemsToSort));
