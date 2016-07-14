/**
 *Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *   & = &amp; &AMP;
 *   < = &lt; &LT;
 *   > = &gt; &GT;
 *   " = &quot; &QUOT;
 *   ' = &apos;
 * */



function convertHTML(str) {
    var simbols = [  '&',     '<',   '>',     '"',     "'"  ];
    var conv    = [ '&amp;' ,'&lt;','&gt;','&quot;','&apos;'];

    var result = '';
    for (var i = 0; i< str.length; i++){
        var x = simbols.indexOf(str.charAt(i));
        console.log(x);
        if(x >=0){
            result += conv[x];
        }else{
            result += str.charAt(i);
        }
    }

    return result;
}

function filterHtml(str){
    var regex = new RegExp("/(<|>|'|&|"+'");/g');
    return str.replace(regex, '');
}

console.log(filterHtml("Dolce & Gabbana"));


//console.log(convertHTML("Dolce & Gabbana"));