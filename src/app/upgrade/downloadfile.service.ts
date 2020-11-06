import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {

  constructor(
    private http: HttpClient,) { }
  export() {
    
    // return this.http.get("http://localhost:4200/assets/CL_NOL_Format_2019.docx", 
    return this.http.get("https://ccp.moodi.org/assets/CL_NOL_Format_2019.docx", 
        {responseType: 'blob'});
    }
}
