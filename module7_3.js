let emptyObj = newObj();

console.log(Object.getPrototypeOf(emptyObj));

function newObj(){
    return Object.create(null);
}