/**
 Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 */


function uniteUnique(arr) {
    var args = Array.from(arguments);
    var result = args[0];

    for (var i = 1; i <args.length; i++){
        var a = args[i];
        console.log(a);
        a.forEach(function (val) {
            if (result.indexOf(val)<0){
                result.push(val);
            }
        })
    }
    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));