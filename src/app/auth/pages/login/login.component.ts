import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import {MessageService} from 'primeng/api';
import { delay } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
value3!: string;
miFormulario: UntypedFormGroup = this.fb.group({
  email: ['test3@test.com' , [Validators.required, Validators.email]],
  password: ['123456' , [Validators.required, Validators.minLength(6)]]
})

constructor(private fb: UntypedFormBuilder,
            private router: Router,
            private authService: AuthService,
            private messageService: MessageService) {}

login(){
  const {email, password } = this.miFormulario.value;
  this.authService.login(email, password)
  .subscribe(ok=>{
    console.log(ok);
    if(ok === true){
      this.messageService.add({severity:'success', summary: 'Ok', detail: 'Inicio de sesion satisfactorio'});
      this.miFormulario.controls['email'].setErrors({'incorrect': true})
      this.miFormulario.invalid == true;
      new Promise(resolve => {
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard')
        }, 2 * 1000)
      })
     
      
    } else {
      this.messageService.add({severity:'error', summary: 'Error', detail: ok});
    }
  })
  
 
} 

}

