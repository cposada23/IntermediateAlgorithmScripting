function convertToRoman(num) {
    var roman = '';
    var nRomanos = [['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                    ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']];
    var miles = Math.floor(num/1000)%10;
    for (var i = 1; i<=miles; i++){
        roman += 'M';
    }
    var x =  num;
    var factor = 100;
    for (var y = 2; y>=0; y--){
        x = Math.floor(num/factor)%10;
        roman += x>0?nRomanos[y][x-1]:'';
        factor/=10;
    }
    return roman;
}
console.log(convertToRoman(2455));