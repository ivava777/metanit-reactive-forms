import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public myForm: FormGroup;
    constructor(){
        this.myForm = new FormGroup({
            'userName': new FormControl('Tom', [Validators.required, this.userNameValidator]),
            'userEmail': new FormControl('', [
                                Validators.required,
                                Validators.email
                            ]),
            "userInn": new FormControl('12345678901234', Validators.pattern('[0-9]{14}')),
            "phones": new FormArray([
              new FormControl('+38', Validators.required)
            ])
        });
    }

    submit(): void{
        console.log(this.myForm);
    }

    // валидатор
    userNameValidator(control: FormControl): {[s: string]: boolean}{
      if (control.value === 'нет'){
          return {'userName': true};
      }
      return null;
  }

  addPhone(): void{
    (this.myForm.controls['phones'] as FormArray).push(new FormControl('+38', Validators.required));
  }
}
