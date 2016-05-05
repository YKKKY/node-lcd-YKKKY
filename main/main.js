exports.createLcd=function(inputs){
    printLcd=require('./lcdDigits');
    var lcd=printLcd.buildLcd();
    var numberArray=printLcd.buildNumberArry(inputs);
    var numberValue=printLcd.matchNumberString(numberArray, lcd);
    var numberString = printLcd.buildNumberString(numberValue, numberArray);
    console.log(numberString);
}



