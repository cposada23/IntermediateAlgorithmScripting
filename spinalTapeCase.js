
function spinalCase(str) {
    var regex = /\s+|_+/g; //match de caracteres en blanco o undercores
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); // match de caracteres en miniscula seguidos por una mayuscula
    return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));