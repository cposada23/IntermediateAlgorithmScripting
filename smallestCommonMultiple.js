
function smallestCommons(arr) {

    //guardo el minimo y el maximo
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null,arr);
    var mcm = min*max;
    var i = 1;

    while(true){
        var sc = mcm * i;
        //console.log("sc: " +sc );
        var cont = 0;
        for(var j= min+1; j<max;j++){
            if(sc%j!==0){
                break;
            }
            cont++;
        }
       // console.log("cont: " + cont + 'max-min = ' + (max-min));
        if(cont === (max-min)-1){
            return sc;
        }
        i++;

    }
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([23, 18]));