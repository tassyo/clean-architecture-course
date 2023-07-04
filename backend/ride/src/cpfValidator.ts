// @ts-nocheck
function isValidValue(cpf){
    return  cpf.length >= 11
}
function hasAllDigitsEqual(cpf){
    return !cpf.split("").every(c => c === cpf[0])
}
function formattedValue(cpf){
      return cpf.replace(/\D/g,"")
}
function calculateDigit(cpf:string,factor:number){
    let total = 0;
    for(const digit of cpf){
       if(factor >1) total += parseInt(digit) * factor--;
    }
    const rest = total%11;
    return (rest<2) ? 0 : 11-rest;
}
function extractCheckDigit(cpf){
    return cpf.slice(9);
}
export function validate (cpf:string) {
    cpf = formattedValue(cpf);
    if(!isValidValue(cpf)) return false;
    if(!hasAllDigitsEqual(cpf)) return false;
    let dg1 =calculateDigit(cpf,10);
    let dg2 =calculateDigit(cpf,11);
    return extractCheckDigit(cpf) == `${dg1}${dg2}`;
}