var main = require('../main/main.js');
var fixtures = require('./fixtures.js');

describe('unit testing',function () {
    var lcd;
    beforeEach(function () {
        lcd= fixtures.buildLcd();
    });

    describe('test splitNumber', function () {
        var input=910;
        var inputs=input+"";
        it('return correct numberArray', function () {
            var numberArray = ["9","1","0"];
            expect(main.buildNumberArry(inputs)).toEqual(numberArray);
        });
    });

    describe('test buildLcdArray', function () {
        var numberArray;
        beforeEach(function () {
            numberArray=["9","1","0"];
        });
        it('return correct lcdArray',function () {

            var value = [["._. ", "|_| ", "..| "], ["... ", "..| ", "..| "], ["._. ", "|.| ", "|_| "]];

            expect(main.matchNumberString(numberArray,lcd)).toEqual(value);
    });
    });

    describe('test buildLcdArray', function () {
        var numberArry = ["9", "1", "0"];
        var value = [["._. ", "|_| ", "..| "], ["... ", "..| ", "..| "], ["._. ", "|.| ", "|_| "]];

        it('matchNumberString(910) should print correct text', function () {

            var numberString =
                "._. " + "... " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "\n" +
                "..| " + "..| " + "|_| ";

            expect(main.buildNumberString(value,numberArry)).toEqual(numberString)
        });
    });

});
