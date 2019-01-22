var rope = { value: 1500, weight: 1 };
var food = { value: 2000, weight: 3 };
var tent = { value: 3000, weight: 4 };
var iphone = { value: 2000, weight: 1 };
var constraint = [1, 2, 3, 4];
var items = [rope, tent, food, iphone];
function createGrid() {
    var newGrid = [];
    for (var row = 0; row < items.length; row++) {
        newGrid[row] = [];
        for (var col = 0; col < constraint.length; col++) {
            newGrid[row][col] = 0;
        }
    }
    return newGrid;
}
function fillInGrid(grid) {
    for (var row in items) {
        for (var col in constraint) {
            var _a = items[row], value = _a.value, weight = _a.weight;
            if (grid[+row - 1] === undefined) {
                grid[row][col] = value;
                continue;
            }
            var prevRowSameCol = grid[+row - 1][col];
            if (weight > constraint[col]) {
                grid[row][col] = prevRowSameCol;
                continue;
            }
            if (weight === constraint[col]) {
                grid[row][col] = prevRowSameCol > value ? prevRowSameCol : value;
                continue;
            }
            var diff = constraint[+col - 1] - weight;
            grid[row][col] = prevRowSameCol > value + grid[+row - 1][diff] ? prevRowSameCol : value + grid[+row - 1][diff];
        }
    }
    return grid;
}
var matrix = createGrid();
console.log(matrix);
console.log(fillInGrid(matrix));
// Can the value of a column ever go down?
// Can we change the order of items?
// Cannot depend on each other
// Big O notation? O(2^n)
