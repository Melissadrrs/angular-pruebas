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
        correo:[null,[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),this.validatorsUtil.validadorCorreos(this.dominiosCorreosGratuitos)]],
        sexo:[null,Validators.required],
        intereses:[this.intereses.map(x=> this.fb.control(null))]
        })

  }

  CallChange(event:any){
    console.log(event.target)
  }
}
