import { Component, OnInit  } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
grupo: FormGroup;
ArraySexo: Array<string> =['Mujer','Hombre'];
  constructor(private fb:FormBuilder){}

  ngOnInit(){
      this.grupo=this.fb.group({
        nombre:[null,Validators.required],
        apellido:[null,Validators.required],
        correo:[null,[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
        sexo:[null,Validators.required]
        })

  }

  CallChange(event:any){
    console.log(event.target)
  }
}
