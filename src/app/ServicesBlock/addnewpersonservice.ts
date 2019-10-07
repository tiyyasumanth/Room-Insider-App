import {Injectable,OnInit, NgZone} from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobalUrl } from './globalurl';

@Injectable()
export class AddNewPersonservices extends AppGlobalUrl{
    
    constructor(private http:HttpClient){
           super();
    }

    savenewpersoninfo(data:any):Observable<any>{
        //  return this.http.post('http://192.168.0.100:89/savenewpersoninfoservice/',data,{headers:
        return this.http.post(this.baseAppUrl+'/savenewpersoninfoservice/',data,{headers:
    new HttpHeaders({'Content-type':'application/json'})});
    }
}