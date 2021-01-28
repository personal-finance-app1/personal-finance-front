
/**numberValidator utilizes RegExps to perform string matching which eliminates all invalid input.
 * It will flag any input containing numbers, symbols, and other non digits, with the exception of a 
 * decimal as invalid. Front padding of zeros is allowed as JS will automatically remove those off 
 * integer or decimal numbers.
 */
export  function numberValidator(input) {

    let inputStringConversion = input + ""; //convert input to string since it could be anumber
    let isIntegerTest = /^[0-9]+$/
    let isDecimalTest = /^[0-9]+.[0-9]{1,2}$/
   // let containsInvalidIntegerCharsTest = /[^0-9]/
    let containsInvalidDecimalCharsTest = /[^0-9\.]/

    let isValidInteger = isIntegerTest.test(inputStringConversion);  
    let isValidDecimal = isDecimalTest.test(inputStringConversion) && !containsInvalidDecimalCharsTest.test(inputStringConversion);

    return isValidInteger || isValidDecimal;
}
