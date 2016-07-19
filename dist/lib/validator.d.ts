/**
 * This class contains functions which are used to validate the data.
 */
 default class Validator {
    /**
     * This function will check whether string is empty or not.
     * If string is not empty , it returns true otherwise false.
     * @param {string}value is string which is need to validate.
     * @return {boolean} true if string is not empty . otherwise false.
     */
    validateString(string: string): boolean;
    /**
     * This function will validate email. It returns true if email is valid otherwise false.
     * @param  {string}  email [ email has to pass  as a parameter ]
     * @return {boolean}       [It returns true if email is valid otherwise false.]
     */
    validateEmail(email: string): boolean;
    /**
     * [this function will validate date(yyyy/mm/dd) which may be leap year or normal year]
     * @param  {string}  date
     * @return {boolean}      [It returns true if date is valid otherwise false]
     */
    validateDate(date: string): boolean;
    /**
     * [This function validates 10 digit mobile number, American mobile number with country code]
     * @param  {string}  mobileNumber
     * @return {boolean} [It returns true if mobileNumber is valid otherwise false]
     */
    validateMobileNumber(mobileNumber: string): boolean;
    /**
     * [ This function validates creditCardNumber such as American Express credit card,
     * Visa credit card, Discover Card, Diners Club Card,JCB Card]
     * @param  {string}  creditCardNumber
     * @return {boolean}  [It returns true if creditCardNumber is valid otherwise false]
     */
    validateCreditCardNumber(creditCardNumber: string): boolean;
}
