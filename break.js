/* for(var i = 1; i < 20; i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
} */
/* var roastGiven = 0;
while(roastGiven < 10) {
    console.log('roast den gift ansi');
    roastGiven++;
    if (roastGiven > 4) {
        break
    }
} */

/* var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for(var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'pen') {
        break;
    }
    console.log(item);
} */

var numbers = [45, 11, 77, 138, 83, 145, 268, 36, 78, 45];
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 100) {
        break; //samne r cholbe na
    }
    console.log(number);
}
