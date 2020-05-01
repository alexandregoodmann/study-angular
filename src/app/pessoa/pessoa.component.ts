import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  group: FormGroup;
  mapa = new Map<string, string>();

  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({
      nome: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      nascimento: [null, [Validators.required, _AfterToday]],
      obito: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.group.controls;
  }

  isValid(campo: string) {
    const control = this.group.get(campo);
    if ((control.touched || control.dirty) && control.invalid) {
      console.log(campo, control);
      return control.errors;
    }
  }

}

export function _AfterToday(control: AbstractControl): { [key: string]: any } {
  if (!isNullOrUndefined(control.value)) {
    const d = new Date(control.value)
    if (d.getTime() > new Date().getTime()) {
      return { after: true }
    }
  }
}

export function AfterToday(
  controlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const value = new Date(control.value);
    if (value.getTime() > new Date().getTime()) {
      control.setErrors({ after: true })
    }
  }
}

/**
 * Erro se primeiro controle possui uma data anterior ao segundo. 
 * Exemplo: BeforeDate('obito', 'nascimento')
 * @param control Nome do controle
 * @param controlToCompare Controle que pretende comparar
 */
export function BeforeDate(
  control: string,
  controlToCompare: string
) {
  return (formGroup: FormGroup) => {
    const control1 = formGroup.controls[control];
    if (control1.value) {
      const control2 = formGroup.controls[controlToCompare];
      const date1 = new Date(control1.value);
      const date2 = new Date(control2.value);
      if (date1.getTime() < date2.getTime()) {
        control1.setErrors({ before: true })
      }
    }
  }
}