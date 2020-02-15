import { Component, OnInit  } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
grupo: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
      this.grupo=this.fb.group({
        nombre:[null,Validators.required]
      }
    )
  }
}
