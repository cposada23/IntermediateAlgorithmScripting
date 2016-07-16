
function sumPrimes(num) {

    var sum = 0;
    for(var i = 1; i <=num; i++){
        var contador = 0;
        console.log(i);
        for (var j = 1; j<=i; j++){
            if(i%j===0){
                contador ++;
            }
        }
        if(contador === 2){
            console.log("si");
            sum +=i;
        }
    }
    return sum;
}

console.log(sumPrimes(10));