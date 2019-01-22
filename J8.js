function determineFruit(_a) {
    var size = _a.size, redness = _a.redness;
    var fruit = [
        { name: "grape", size: 1, redness: 0 },
        { name: "orange", size: 2, redness: 1 },
        { name: "grapefruit", size: 3, redness: 2 }
    ];
    var name = fruit.reduce(function (prev, cur) {
        var curCalc = calcDistance([[size, cur.size], [redness, cur.redness]]);
        console.log(curCalc);
        return prev.dist < curCalc ? prev : { name: cur.name, dist: curCalc };
    }, {
        name: fruit[0].name,
        dist: calcDistance([[size, fruit[0].size], [redness, fruit[0].redness]])
    }).name;
    return "This is most likely a " + name;
}
function calcDistance(data) {
    return Math.sqrt(data.reduce(function (acc, _a) {
        var init = _a[0], test = _a[1];
        return acc + Math.pow(init - test, 2);
    }, 0));
}
console.log(determineFruit({ size: 2, redness: 2 }));
// k-nearest neighbors or KNN
// Euclidean distance
