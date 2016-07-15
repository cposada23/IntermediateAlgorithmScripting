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
    //var regex = new RegExp("/&/",'g');
    //var regex = /\s/g;
    //var regex = /([^\W_]+[^\s-]*)*/g;
    /*return str.replace(regex, function (s) {
        return s.toLowerCase()+'-';
    });*/

    var regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(regex, '-').toLowerCase();
}

console.log(filterHtml("AllThe-small Things"));


//console.log(convertHTML("Dolce & Gabbana"));