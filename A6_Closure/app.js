var sequence = (function () {
    // private variables which no one can change
    // except the function declared below.
    
    var count = 0;
    var prefix = "S";
    
    // returning a named function expression
    // names show up in debuggers - but it's optional otherwise
    return function innerSequence() {
        count = count + 1;
        return prefix + count;
    };
    
})();

console.log(sequence()); // S1
console.log(sequence()); // S2




