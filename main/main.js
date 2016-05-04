function printLcd(inputs) {

    var main = require('./main.js');
    var numberArry = main.buildNumberArry(inputs);
    var lcd = require('../test/fixtures.js');
    var lcd = lcd.buildLcds();
    var numberValue =main.matchNumberString(numberArry, lcd);
    var numberString =main.buildNumberString(numberValue, numberArry);
}

exports.buildNumberArry =function(numbers) {
    var numberArry = [];

    for (var i = 0; i < numbers.length; i++)
        numberArry.push(numbers[i]);

    return numberArry;
}

exports.findNumber=function(number, lcd) {
    for (var i = 0; i < lcd.length; i++) {
        if (number === lcd[i].key) {

            return lcd[i].value;
        }
    }
}

exports.matchNumberString=function(numberArry, lcd) {
    var numberValue = [];

    numberArry.forEach(function (number) {
        var value = exports.findNumber(number, lcd);

        numberValue.push(value);
    });

    return numberValue;
}

exports.buildNumberString=function(numberValue, numberArry) {
    var Enter = 0;
    var string = "";

    for (var i = 0; i < 3; i++) {
        for (var row = 0; row < numberArry.length; row++) {
            string += numberValue[row][i];
        }
        Enter++;
        if (Enter < 3) {
            string += "\n";
        }
    }

    return string;
}



