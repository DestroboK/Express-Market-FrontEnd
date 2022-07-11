import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { AuthResponse, Usuario} from '../interfaces/interfaces';
import { of, tap, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario!: Usuario;
  constructor(private http: HttpClient){}

  get usuario(){
    return {...this._usuario};
  }

  login(email: string, password: string){
    
    const url = `${ environment.baseUrl}/auth`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp =>
        {
          if( resp.ok){
            localStorage.setItem('token', resp.token!);
            this._usuario = {

              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
      map( resp => resp.ok ),
      catchError(err=> of(err.error.msg))
    );
  }
  validarToken(): Observable<boolean>{
    const url = `${ environment.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '');
    return this.http.get<AuthResponse>(url, {headers: headers})
    .pipe(
      map(resp => {
        localStorage.setItem('token', resp.token!);
        this._usuario = {

          name: resp.name!,
          uid: resp.uid!
        }
        return resp.ok;
      }),
      catchError(err => of(false))
    );
  }
  logout(){
    localStorage.removeItem('token');
  }

  registro (name: string, email: string, password: string, address: string){
    const url = `${ environment.baseUrl}/auth/new`;
    const body = {name, email, password,address};

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp =>
        {
          if( resp.ok){
            localStorage.setItem('token', resp.token!);
            this._usuario = {

              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
      map( resp => resp.ok ),
      catchError(err=> of(err.error.msg))
    );
  }
}
