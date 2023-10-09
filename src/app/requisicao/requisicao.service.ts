import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient
  ) { }

  get(rota : string = '/'){
    return this.http.get("http://localhost:8080" + rota);
  }
    
  delete(rota: string){
    return this.http.get("http://localhost:8080" + rota);
  }
  
  put(fd: any, indice:string) {
  
  }

  post(formData:any, rota:string = '') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-type': 'application/json'
      })
    };
    
    return this.http.post(`http://localhost:8080/${rota}`, formData, httpOptions);
  }
}
