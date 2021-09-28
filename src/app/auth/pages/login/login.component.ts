import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  constructor(private _fb: FormBuilder,
              private _router: Router,
              private authService: AuthService) { }

  miFormulario: FormGroup = this._fb.group({
   email: ['test4@gmail.com', [Validators.required, Validators.email]],
   password: ['123456', [Validators.required, Validators.minLength(6)]]
  })
  
  login(){
    const {email, password} = this.miFormulario.value

    this.authService.login(email, password)
    .subscribe( ok => {
      
      if( ok === true){
        this._router.navigateByUrl('/dashboard')
      } else {
        Swal.fire('Error', ok, 'error')
      }
    })
  }
  
}
