/**
 * This class contains functions which are used to validate the data.
 */
export default  class Validator {


/**
 * This function will check whether string is empty or not.
 * If string is not empty , it returns true otherwise false.
 * @param {string}value is string which is need to validate.
 * @return {boolean} true if string is not empty . otherwise false.
 */

public validateString(string : string): boolean {
  if ((string.length) !== 0) {
      if ((string !== null) && (string !== undefined)) {
        return true ;
      }
  }
    return false ;
  }
/**
 * This function will validate email. It returns true if email is valid otherwise false.
 * @param  {string}  email [ email has to pass  as a parameter ]
 * @return {boolean}       [It returns true if email is valid otherwise false.]
 */
public  validateEmail(email : string) : boolean {
  let emailPattern : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (this.validateString(email)) {
   if (email.match(emailPattern)) {
     return true ;
   }
 }
   return false ;
 }
 /**
  * [this function will validate date(yyyy/mm/dd) which may be leap year or normal year]
  * @param  {string}  date
  * @return {boolean}      [It returns true if date is valid otherwise false]
  */
public validateDate(date : string) : boolean {
let pattern : RegExp = /^(?:\d{4}\/(?:(?:(?:(?:0[13578]|1[02])\/(?:0[1-9]|[1-2][0-9]|3[01]))|(?:(?:0[469]|11)\/(?:0[1-9]|[1-2][0-9]|30))|(?:02\/(?:0[1-9]|1[0-9]|2[0-8]))))|(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))|(?:(?:[02468][048])|[13579][26])00)\/02\/29)$/;
  if (this.validateString(date)) {
     if (date.match(pattern)) {
        return true ;
      }
}
  return  false ;

  }
/**
 * [This function validates 10 digit mobile number, American mobile number with country code]
 * @param  {string}  mobileNumber
 * @return {boolean} [It returns true if mobileNumber is valid otherwise false]
 */
public validateMobileNumber(mobileNumber : string) : boolean {
if (this.validateString(mobileNumber)) {

  let format : RegExp = /^(\d{10})|(\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}))|(\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4}))$/ ;

if (mobileNumber.match(format)) {
  return true ;
}

}
  return false ;
}
/**
 * [ This function validates creditCardNumber such as American Express credit card,
 * Visa credit card, Discover Card, Diners Club Card,JCB Card]
 * @param  {string}  creditCardNumber
 * @return {boolean}  [It returns true if creditCardNumber is valid otherwise false]
 */
public validateCreditCardNumber(creditCardNumber : string): boolean {
if (this.validateString(creditCardNumber)) {
 let format : RegExp = /^(?:3[47][0-9]{13})|(?:4[0-9]{12}(?:[0-9]{3})?)|(?:5[1-5][0-9]{14})|((?:6(?:011|5[0-9][0-9])[0-9]{12}))|((?:3(?:0[0-5]|[68][0-9])[0-9]{11}))$/;
if (creditCardNumber.match(format)) {
  return true ;
}
}
return false ;
}






}
