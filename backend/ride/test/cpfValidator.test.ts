import {validate} from "../src/cpfValidator";
test.each(['235.065.430-32','07021878010'])('Deve testar cenários validos de cpf',(cpf:string)=>{
    expect(validate(cpf)).toBeTruthy();
});
test.each(['99999999999'])('cpf invalido',(cpf:string)=>{
    expect(validate(cpf)).toBeFalsy();
});