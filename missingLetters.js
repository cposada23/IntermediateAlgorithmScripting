/**
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * @param str
 * @returns {*}
 */
function fearNotLetter(str) {
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var i = letters.indexOf(str.charAt(0));
    var arr = str.split('');
    var letra;
    for (var l in  arr){
        if(arr[l] !== letters[i]){
            letra = letters[i];
            break;
        }
        i++;
    }
    return letra;
}

console.log(fearNotLetter("bcde"));
