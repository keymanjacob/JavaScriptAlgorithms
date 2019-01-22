var prevResults = [
    { weekend: 0, temperature: 1, pies: 100 },
    { weekend: 0, temperature: 2, pies: 150 },
    { weekend: 1, temperature: 3, pies: 200 },
    { weekend: 1, temperature: 4, pies: 300 }
];
function calcDistance(data) {
    return Math.sqrt(data.reduce(function (acc, _a) {
        var init = _a[0], test = _a[1];
        return acc + Math.pow((init - test), 2);
    }, 0));
}
function calcNeighbors(results, _a) {
    var weekend = _a.weekend, temperature = _a.temperature;
    return results.reduce(function (acc, cur) {
        var curCalc = calcDistance([[weekend, cur.weekend], [temperature, cur.temperature]]);
        // @ts-ignore
        return acc.concat([Object.assign({ dist: curCalc }, cur)]);
    }, []).sort(function (a, b) { return a.dist < b.dist ? -1 : a.dist > b.dist ? 1 : 0; });
}
var _a = calcNeighbors(prevResults, { weekend: 1, temperature: 2 }), first = _a[0], second = _a[1], rest = _a.slice(2);
console.log((first.pies + second.pies) / 2);
