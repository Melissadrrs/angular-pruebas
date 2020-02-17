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

  validadorMinimoChecks(
    formArrayName: string,
    minimoChecks: number
  ): ValidatorFn {
    return (ctrl: AbstractControl) => {
      if (!ctrl || !ctrl.parent) {
        return null;
      }

      const fa = ctrl.parent.get(formArrayName) as FormArray;

      if (!fa || !fa.controls) {
        return null;
      }

      let checksSeleccionados = 0;

      for (const control of fa.controls) {
        if (control.value) {
          checksSeleccionados++;
        }
      }

      if (checksSeleccionados < minimoChecks) {
        return { minimoChecks: true };
      }

      return null;
    };
  }

  

}