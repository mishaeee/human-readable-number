'use strict'
module.exports = function toReadable(number) {
    let arrOfInts = new Array();
    let res ='';
    if (number == 0) {
        return 'zero';
    }
    while (number > 0) {
        arrOfInts.unshift(Math.floor(number % 10));
        number = Math.floor(number / 10);
    }

    if (arrOfInts.length == 3) {
        res += switchSingle(arrOfInts[0]) + ' hundred';
        if (arrOfInts[1] != 0) {
            res += ' ';
        }
        if (arrOfInts[1] == 0 && arrOfInts[2] == 0) { return res; }
        arrOfInts.shift();
    }
    if (arrOfInts.length == 2) {
        if (arrOfInts[0] == 1) {
            switch (arrOfInts[1]) {
                case 0:
                    res += 'ten';
                    break;
                case 1:
                    res += 'eleven';
                    break;
                case 2:
                    res += 'twelve';
                    break;
                case 3:
                    res += 'thirteen';
                    break;
                case 4:
                    res += 'fourteen';
                    break;
                case 5:
                    res += 'fifteen';
                    break;
                case 6:
                    res += 'sixteen';
                    break;
                case 7:
                    res += 'seventeen';
                    break;
                case 8:
                    res += 'eighteen';
                    break;
                case 9:
                    res += 'nineteen';
                    break;
            }
            return res;
        }
        else {
            switch (arrOfInts[0]) {
                case 2:
                    res += 'twenty';
                    break;
                case 3:
                    res += 'thirty';
                    break;
                case 4:
                    res += 'forty';
                    break;
                case 5:
                    res += 'fifty';
                    break;
                case 6:
                    res += 'sixty';
                    break;
                case 7:
                    res += 'seventy';
                    break;
                case 8:
                    res += 'eighty';
                    break;
                case 9:
                    res += 'ninety';
                    break;
            }
            if (arrOfInts[1] != 0) {
                res += ' ';
            }
            arrOfInts.shift();
        }
    }
    if (arrOfInts.length == 1) {
        res += switchSingle(arrOfInts[0]);
        return res;
    }
}

function switchSingle(num) {
    switch (num) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 0:
            return '';
    }
}
