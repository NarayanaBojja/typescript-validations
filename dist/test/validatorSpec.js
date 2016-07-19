///<reference path= "../lib/validator.ts"/>;
///<reference path="../../typings/jasmine/jasmine.d.ts"/>;
describe(" Validator class", function () {
    var validate = undefined;
    beforeEach(function () {
        validate = new Validator();
    });
    it("checking functions definitions", function () {
        expect(validate.validateString).toBeDefined();
        expect(validate.validateEmail).toBeDefined();
        expect(validate.validateDate).toBeDefined();
        expect(validate.validateMobileNumber).toBeDefined();
        expect(validate.validateCreditCardNumber).toBeDefined();
    });
    it("validateString should validate string", function () {
        var result = validate.validateString("Narayana");
        expect(result).toEqual(true);
    });
    it("validateEmail should validate email", function () {
        var result1 = validate.validateEmail("narayanabojja@gmail.com");
        var result2 = validate.validateEmail("narayana@gmail");
        expect(result1).toEqual(true);
        expect(result2).toEqual(false);
    });
    it("validateDate should validate date", function () {
        var result1 = validate.validateDate("2016/05/24");
        var result2 = validate.validateDate("24");
        expect(result1).toEqual(true);
        expect(result2).toEqual(false);
    });
    it("validateMobileNumber should validate mobileNumber", function () {
        var result1 = validate.validateMobileNumber("9848022338");
        var result2 = validate.validateMobileNumber("9848022");
        var result3 = validate.validateMobileNumber("222-055-9034");
        var result4 = validate.validateMobileNumber(" +24-0455-9034");
        expect(result1).toEqual(true);
        expect(result2).toEqual(false);
        expect(result3).toEqual(true);
        expect(result4).toEqual(true);
    });
    it("validateCreditCardNumber should validate creditCardNumber", function () {
        var result1 = validate.validateCreditCardNumber("374957359484663"); // American creditCard
        var result2 = validate.validateCreditCardNumber("4539342893977387"); // visa creditCard
        var result3 = validate.validateCreditCardNumber("6011733686356809"); // Discover creditCard
        var result4 = validate.validateCreditCardNumber("38118544836022"); // Diners Club creditCard
        expect(result1).toEqual(true);
        expect(result2).toEqual(true);
        expect(result3).toEqual(true);
        expect(result4).toEqual(true);
    });
});
