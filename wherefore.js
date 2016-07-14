function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);
    var values = [];
    keys.forEach(function (val) {
        console.log("for each " + val);
        values.push(source[val]);
    });
    console.log("keys" + keys);
    keys.every(function (key) {
        console.log('every '+key);
    });
    collection.forEach(function (objeto) {
        var cumple = true;
        for(var i = 0; i<keys.length; i++){
           if(objeto.hasOwnProperty(keys[i])){
               if(!objeto[keys[i]]=== values[i]){
                   cumple = false;
               }
           }else{
               cumple = false;
           }
        }
        if(cumple){
            arr.push(objeto);
        }
    });
    return arr;
}

function where2(collection, source) {
    var arr = [];
    var keys = Object.keys(source);
    //Filtro el array y remuevo los que no cumplan la condicion
    arr = collection.filter(function (obj) {
       //recorro sobre el array keys comparando si esta esta en el objeto
        return keys.every(function (key) {
            console.log("key every where2 " + key);
           //Verifico que el objeto tenga la key y el valor
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });

    return arr;
}
//console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));

console.log(where2([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));