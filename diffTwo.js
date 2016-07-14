function diffArray(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    newArray = newArray.filter(function (val) {
        return (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1);
    });
    return newArray;
}

function joinArray(arr1, arr2) {
    var newArray = arr1.length>arr2.length? who(arr1, arr2):who(arr2, arr1);
    newArray[0] =  newArray[1].filter(function (val) {
        return newArray[0].indexOf(val) !== -1;
    });
    return newArray[0];
}

function who(a , b){
    var mat = [];
    mat.push(a);
    mat.push(b);
    return mat;
}


console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(joinArray([1, "calf", 3, "piglet",4,5,6], [1, "calf", 3, 4]));