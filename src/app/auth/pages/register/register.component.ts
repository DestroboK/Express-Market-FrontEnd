import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService) { }
  miFormulario: FormGroup = this.fb.group({
    email: ['' , [Validators.required, Validators.email]],
    name: ['' , [Validators.required]],
    address: ['' , [Validators.required]],
    password: ['' , [Validators.required, Validators.minLength(8)]]
  })
  ngOnInit(): void {
  }

  crear(){
    this.messageService.add({severity:'success', summary: 'Ok', detail: 'Inicio de sesion satisfactorio'});
  }
  failure(){
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Algo salio mal iniciando sesion'});
  }

}
