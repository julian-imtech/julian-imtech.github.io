import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { deployConf } from '../../utils/config';
import { ServerMessage } from '../../classes/serverMessage.class';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  baseURL: string = deployConf.apiUrl;
  token:  string | null;

  //52 endpoints web (8 meses) + 67 end points movil (8 meses) + 7 rutas para medidores (5 meses)  = 119 end points totales
  //La primera que se realizaron los envios de informacion y logue se termino en 3 semanas (1 mes a lo mucho)
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.token = null;
  }

  //USER END-POINTS
  setToken( newToken: string | null ) {
    this.token = newToken;
  }
  doLogin(email: String, password: String): Promise<ServerMessage> {
    return new Promise((resolve, reject) => {
      const data = { email: email, password: password };

      this.http.post<ServerMessage>(this.baseURL + 'auth/login', data, {}).subscribe((response: ServerMessage) => {
        resolve(response);
      }, (error) => {
        reject(error)
      });
    })
  }
  getUserData(token: string | null): Promise<ServerMessage> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })

      this.http.get<ServerMessage>(this.baseURL + 'auth/validate-token', { headers: headers }).subscribe((response: ServerMessage) => {
        resolve(response);
      }, (error) => {
        reject(error)
      });
    })
  }
  doResetPassword(recoverEmail: string): Promise<ServerMessage> {
    return new Promise((resolve, reject) => {
      this.http.post<ServerMessage>(
        this.baseURL + 'public/reset-password', { recoverEmail: recoverEmail }, {}).subscribe((response: ServerMessage) => {
          resolve(response);
        }, (error: any) => {
          reject(error);
        });
    });
  }
  /* Image load functions */
  getImage(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      });

      this.http.get<any>(url, { headers: headers, responseType: 'blob' as 'json' })
        .pipe(
          timeout(2000),
          catchError(e => {
            // do something on a timeout
            //reject(e);
            return of(null);
          })
        ).subscribe((imageBlob) => {
          let objectURL = "";
          if (imageBlob != null && imageBlob != undefined) {
            objectURL = URL.createObjectURL(imageBlob);
          }
          resolve(this.sanitizer.bypassSecurityTrustUrl(objectURL));
        }, (error: ServerMessage) => {
          reject(error)
        });
    })
  }
  uploadImage(file: File | Blob , idServiceProfile: number, position: number): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    const formData: FormData = new FormData();
    //formData.append('file', file);

    var length = 20;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var randomFileName = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      randomFileName += charset.charAt(Math.floor(Math.random() * n));
    }

    formData.append('file', file, idServiceProfile + '-' + randomFileName + '.jpg');

    const req = new HttpRequest('POST', this.baseURL + 'images-service/upload-image-file/' + position, formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
