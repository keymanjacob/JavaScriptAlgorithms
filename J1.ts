let items = [[1,2,3,4], [5,6,7,[8]]];
function findEight (i) {
    let hasEight: boolean = false;
    i.forEach( a => {
        if ( a === 80 ) {
            hasEight = true;
        }
        if ( Array.isArray(a) ) {
            hasEight = findEight(a);
        }
    } );
    return hasEight;
}

console.log(findEight(items));