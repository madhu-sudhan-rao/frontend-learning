import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, map, retry } from 'rxjs';
import { ToastersService } from '../shared/toasters.service';
import { throwError } from 'rxjs';
import { SpinnerService } from '../shared/spinner.service';

type CustomHeaders = {
  'Client-Id': string;
  'Client-Secret': string;
  'Authorization'?: string; 
};

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private clientId: string = '437920819fa89d19abe380073d28839c';
  private clientSecret: string = '28649120bdf32812f433f428b15ab1a1';
  private authKey: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyLCJlbWFpbCI6Im1hZGh1QHlvcG1haWwuY29tIiwiaWF0IjoxNjk0MjQ4OTgwLCJleHAiOjMxNzIzODY5MTM4MH0.vic1xA0lDMAEJZybzIDAIXlp_LbSVR8ZCbmGJQOXLio';
  // private authKey: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyLCJlbWFpbCI6Im1hZGh1QHlvcG1haWwuY29tIiwiaWF0IjoxNjk2NDEzMTk5LCJleHAiOjMxNzI0MDg1NTU5OX0.LaIHznyffEZtHyzITFg9_2QCbUBYXdy40-vzbk5C4SY';
  private response: any;
  private responseData: any;
  private responseMessage!: string;
 
  constructor(
    private toaster: ToastersService,
    private spinner: SpinnerService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.spinner.showSpinner();
    const isLoginOrSignup = request.url.includes('login') || request.url.includes('signup');
    const isSongsList = request.url.includes('songs-list') || request.url.includes('live');
    const headers: CustomHeaders = {
      'Client-Id': this.clientId,
      'Client-Secret': this.clientSecret,
    }
    if(!isLoginOrSignup){
      headers['Authorization'] = this.authKey;
    }

    const modifiedRequest = request.clone({
      setHeaders: headers
    });

    return next.handle(modifiedRequest).pipe(
      // retry(1),
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.response = event.body;
            this.responseData = event.body.data;
            this.responseMessage = event.body.message;
            if(!isSongsList){
              this.toaster.showSuccess(this.responseMessage);
            }
            this.spinner.hideSpinner();
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toaster.showError(error.error?.error || "An error occured");
        console.log(error);
        this.spinner.hideSpinner();
        return throwError(error);
      })
    );
  }

  getResponse(): any {
    return this.response;
  }

  getResponseData(): any {
    return this.responseData;
  }

  getResponseMessage(): string {
    return this.responseMessage;
  }
}
