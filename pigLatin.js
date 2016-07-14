/*
 Translate the provided string to pig latin.

 Pig Latin takes the first consonant (or consonant cluster)
 of an English word, moves it to the end of the word and suffixes an "ay".

 If a word begins with a vowel you just add "way" to the end.

 Input strings are guaranteed to be English words in all lowercase.
 */



function translatePigLatin(str) {
    var vocales = ['a','e','i','o','u'];
    if (vocales.indexOf(str.charAt(0))!==-1){
        str += 'way';
    }else{
        var index = 1;
        for (var i = 1; i<str.length; i++)
        {
            if(vocales.indexOf(str.charAt(i))!==-1){
                index = i;
                break;
            }
        }
        str = str.slice(index) + str.slice(0,index);
        console.log(index);
        str += 'ay';
    }
    return str;
}


//Con expreciones regulares
function translate(str) {
    var resultado
    var regex = /[aeiou]/gi;  //Match de vocales
    if(str[0].match(regex)){ //Si la primera letra es una vocal
        str += 'way';
    }else{ //la primera letra es una consonante
        var index = str.indexOf(str.match(regex)[0])
        str = str.slice(index) + str.slice(0, index) +'ay';
    }
    return str;
}
console.log(translatePigLatin("glove"));
console.log(translate("glove"));