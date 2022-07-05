import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
value3!: string;
miFormulario: FormGroup = this.fb.group({
  email: ['test1@hotmail.com' , [Validators.required, Validators.email]],
  password: ['12345678' , [Validators.required, Validators.minLength(8)]]
})
constructor(private fb: FormBuilder,
            private router: Router,
            private authService: AuthService,
            private messageService: MessageService) {}

login(){

  this.router.navigateByUrl('/dashboard')
  this.messageService.add({severity:'success', summary: 'Ok', detail: 'Inicio de sesion satisfactorio'});
} 

failure(){
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Algo salio mal iniciando sesion'});
}
}

