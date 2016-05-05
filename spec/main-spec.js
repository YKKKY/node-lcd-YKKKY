var main = require('../main/main.js');
var fixtures = require('../main/lcdDigits.js');

describe('lcd', function () {

    describe('integration testing', function () {
        var inputs = 910 + "";

        beforeEach(function () {
            var lcd =fixtures.buildLcd();
        });





























        it('should print correct text', function () {

            spyOn(console, 'log');
            main.createLcd(inputs);

            var expectText = "._. " + "... " + "._. " + "\n" +
                "|_| " + "..| " + "|.| " + "\n" +
                "..| " + "..| " + "|_| ";

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});

describe('unit testing', function () {

        describe('test splitNumber', function () {
            var input = 910;
            var inputs = input + "";

            it('return correct numberArray', function () {
                var numberArray = ["9", "1", "0"];

                expect(fixtures.buildNumberArry(inputs)).toEqual(numberArray);
            });
        });

        describe('test buildLcdArray', function () {
            var numberArray;
            beforeEach(function () {
                numberArray = ["9", "1", "0"];
            });
            var  lcd = fixtures.buildLcd();
            it('return correct lcdArray', function () {

                var value = [["._. ", "|_| ", "..| "], ["... ", "..| ", "..| "], ["._. ", "|.| ", "|_| "]];

                expect(fixtures.matchNumberString(numberArray, lcd)).toEqual(value);
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

                expect(fixtures.buildNumberString(value, numberArry)).toEqual(numberString)
            });
        });

        describe('printNumberString（9108）', function () {
            var numberArry = ["9", "1", "0", "8"];
            var secondValue = [
                ["._. ", "|_| ", "..| "],
                ["... ", "..| ", "..| "],
                ["._. ", "|.| ", "|_| "],
                ["._. ", "|_| ", "|_| "]];

            it('matchNumberString(9108) should print correct text', function () {

                var numberString =
                    "._. " + "... " + "._. " + "._. " + "\n" +
                    "|_| " + "..| " + "|.| " + "|_| " + "\n" +
                    "..| " + "..| " + "|_| " + "|_| ";

                expect(fixtures.buildNumberString(secondValue, numberArry)).toEqual(numberString);
            });
        });
});
