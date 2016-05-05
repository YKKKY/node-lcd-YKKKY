function buildNumberArry(numbers) {
    var numberArry = [];

    for (var i = 0; i < numbers.length; i++) {
        numberArry.push(numbers[i]);
    }

    return numberArry;
}

function findNumber(number, lcd) {
    for (var i = 0; i < lcd.length; i++) {
        if (number === lcd[i].key) {

            return lcd[i].value;
        }
    }
}

function matchNumberString(numberArry, lcd) {
    var numberValue = [];

    numberArry.forEach(function (number) {
        var value = findNumber(number, lcd);

        numberValue.push(value);
    });

    return numberValue;
}

function buildNumberString(numberValue, numberArry) {
    var enter = 0;
    var string = "";

    for (var i = 0; i < 3; i++) {
        for (var row = 0; row < numberArry.length; row++) {
            string += numberValue[row][i];
        }
        enter++;
        if (enter < 3) {
            string += "\n";
        }
    }

    console.log(string);

    return string;
}
function buildLcd(){
    return [

        {key:"0",value:["._. ","|.| ","|_| "]},
        {key:"1",value:["... ","..| ","..| "]},
        {key:"2",value:["._. ","._| ","|_. "]},
        {key:"3",value:["._. ","._| ","._| "]},
        {key:"4",value:["... ","|_| ","..| "]},
        {key:"5",value:["._. ","|_. ","._| "]},
        {key:"6",value:["._. ","|_. ","|_| "]},
        {key:"7",value:["._. ","..| ","..| "]},
        {key:"8",value:["._. ","|_| ","|_| "]},
        {key:"9",value:["._. ","|_| ","..| "]}

    ];
}

module.exports={
    buildLcd:buildLcd,
    buildNumberArry:buildNumberArry,
    findNumber:findNumber,
    matchNumberString:matchNumberString,
    buildNumberString:buildNumberString,

}