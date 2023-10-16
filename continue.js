var numbers = [45, 11, 77, 138, 83, 145, 268, 36, 78, 45];
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 50) {
        continue; // continue holo porer iteration e ba porer dhap e jabe
    }
    console.log(number);
}