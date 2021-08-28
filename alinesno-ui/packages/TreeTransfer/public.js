export function findParents(item, arr, options = { id: 'id', parentId: 'parentId', root: 0 }){
    let _parents = [];
    return function findParent(item) {
        if (item[options.parentId] === options.root) return _parents;
        const parent = arr.find(i => i[options.id] === item[options.parentId]);
        if (parent) {
            _parents.push(parent);
            return findParent(parent)
        } else {
            return _parents
        }
    }(item);
}