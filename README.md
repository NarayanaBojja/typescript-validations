##Typescript validations
This project contains validations functions.

1) validateString :

  This function will check whether string is empty or not.
  If string is not empty , it returns true otherwise false.

2) validateEmail :
  This function will validate email. It returns true if email is valid otherwise false.

3) validateDate :

 This function will validate date(yyyy/mm/dd) which may be leap year or normal year.
 It returns true if date is valid otherwise false.

4) validateMobileNumber:

 This function validates 10 digit mobile number, American mobile number with country code.
 It returns true if mobileNumber is valid otherwise false.

5) validateCreditCardNumber

  This function validates creditCardNumber such as American Express credit card,
  Visa credit card, Discover Card, Diners Club Card,JCB Card.
  It returns true if creditCardNumber is valid otherwise false.

##How to use :

first of all download this project by just running the below command
"npm install typescript-validations"

Attach typescriptvalidations file in main html file .
Ex :
<script src="../../out/js/typescriptvalidations.min.js"/><script>

Attach validator file in your typescript file wherever you want utilize this functions.
Ex:
///<reference path="../../node_modules/typescript-validations/dist/lib/validator.d.ts"/>
