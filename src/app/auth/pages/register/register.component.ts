import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent  {

  constructor(private _fb: FormBuilder, private _router: Router, private authService: AuthService){}

  miFormulario: FormGroup = this._fb.group({
    name: ['Test4', [Validators.required]],
    email: ['test2@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
   })
   
   register(){
     const {name, email, password} = this.miFormulario.value

     this.authService.register(name, email, password)
     .subscribe( ok => {
        if( ok === true){
          this._router.navigateByUrl('/dashboard')
        } else {
          Swal.fire('Error', ok, 'error')
        }
    })
   }
  
}
