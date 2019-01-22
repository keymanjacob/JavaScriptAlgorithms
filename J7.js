var graph = {};
graph['tyler'] = [{ id: 'henry', dog: false }, { id: 'john', dog: false }, { id: 'aimee', dog: false }];
graph['henry'] = [{ id: 'peggy', dog: false }, { id: 'keli', dog: false }];
graph['john'] = [{ id: 'keli', dog: false }];
graph['aimee'] = [];
graph['peggy'] = [];
graph['keli'] = [{ id: 'claire', dog: true }];
graph['claire'] = [];
function BreadthFirstSearch(name) {
    var searchQueue = [].concat(graph[name]);
    var searched = [];
    var _loop_1 = function () {
        var person = searchQueue.shift();
        // @ts-ignore
        if (!searched.find(function (n) { return n.id === person.id; })) {
            if (person.dog)
                return { value: person.id + " has a dog" };
            else {
                searchQueue = searchQueue.concat(graph[person.id]);
                searched.push(person);
            }
        }
    };
    while (searchQueue.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return 'there are no friends that have a dog';
}
console.log(BreadthFirstSearch('tyler'));
