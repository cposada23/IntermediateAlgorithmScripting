function diffArray(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    newArray = newArray.filter(function (val) {
        return (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1);
    });
    return newArray;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));