import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthorisationService} from "../services/authorisation.service";
import {Router} from "@angular/router";

@Injectable()
export class TokenInjectorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorisationService, private router: Router,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('token', this.authService.token),
    })

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log(event)
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401){}
              this.router.navigate(['/login'])
            if (err.status == 403)
              this.router.navigate([''])
          }
        }
      )
    )

  }
}
