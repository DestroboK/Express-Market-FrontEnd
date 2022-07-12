import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  value3! : string;
  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService) { }
  miFormulario: UntypedFormGroup = this.fb.group({
    email: ['' , [Validators.required, Validators.email]],
    name: ['' , [Validators.required, Validators.minLength(5)]],
    address: ['' , [Validators.required , Validators.minLength(5)]],
    password: ['' , [Validators.required, Validators.minLength(8)]]
  })
  ngOnInit(): void {
  }

  crear(){
      const {email, password, name, address } = this.miFormulario.value;
    this.authService.registro(name , email,password,address)
    .subscribe(ok=>{
    if(ok === true){
      this.messageService.add({severity:'success', summary: 'Ok', detail: 'Bienvenido a Express Market'});
      this.miFormulario.invalid == true;
      new Promise(resolve => {
        setTimeout(() => {
          this.miFormulario.controls['email'].setErrors({'incorrect': true})
          this.router.navigateByUrl('/dashboard')
        }, 2 * 1000)
      })
     
      
    } else {
      this.messageService.add({severity:'error', summary: 'Oops!', detail: ok});
    }
  })
  }


}
