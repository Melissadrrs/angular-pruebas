import {
  FormControl,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';

export class ValidatorsUtil {

  validadorCorreos(arr: string[]) {
      return(control: FormControl):{ [key: string]: any }=>{
if(!control || !control.value || control.value=='')
return null;

const aux=control.value.split('@');

if(aux.length<2) return null;

   if (arr.indexOf(aux[1].toLowerCase()) > -1) 
        return { correoGratuito: true };
      


        return null;
      };
  
  }

}