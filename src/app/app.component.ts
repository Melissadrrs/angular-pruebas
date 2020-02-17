import { Component, OnInit  } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

import {ValidatorsUtil} from './Validadores/Validators-Util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
grupo: FormGroup;
ArraySexo: Array<string> =['Mujer','Hombre'];

  dominiosCorreosGratuitos = [
    'gmail.com',
    'outlook.com',
    'hotmail.com',
    'yahoo.com',
  ];
  intereses = [
    'Tecnología',
    'Lectura',
    'Filantropía',
    'Voluntariado',
    'Música',
  ];

 validatorsUtil: ValidatorsUtil = new ValidatorsUtil();

  constructor(private fb:FormBuilder){}

  ngOnInit(){
      this.grupo=this.fb.group({
        nombre:[null,Validators.required],
        apellido:[null,Validators.required],
                sexo:[null,Validators.required],
        correo:[null,[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),this.validatorsUtil.validadorCorreos(this.dominiosCorreosGratuitos)]],

        intereses: this.fb.array(this.intereses.map(x=> this.fb.control(null)),this.validatorsUtil.validadorMinimoChecks("intereses",3)),
        direcciones: this.fb.array([])
        })

  }

  CallChange(event:any){
    console.log(event.target)
  }

  addDireccion(){
    const fa:FormArray=this.grupo.get('direcciones') as FormArray;

    fa.push(this.fb.control(null));

  }

    removeDireccion(indice:any){
    const fa:FormArray=this.grupo.get('direcciones') as FormArray;

    fa.removeAt(indice);

  }
}
