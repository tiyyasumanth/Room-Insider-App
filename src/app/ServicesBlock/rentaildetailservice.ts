import {Injectable,OnInit, NgZone} from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobalUrl } from './globalurl';


@Injectable()
export class roomrentservices extends AppGlobalUrl{
    
    constructor(private http:HttpClient){
        super();
    }

    postrentdata(data:any):Observable<any>{
    //     return this.http.post('http://192.168.0.103:89/saverentservice/',data,{headers:
    // new HttpHeaders({'Content-type':'application/json'})});
    
    //  return this.http.post('http://192.168.0.100:89/saverentservice/',data,{headers:
    return this.http.post(this.baseAppUrl+'/saverentservice/',data,{headers:
    new HttpHeaders({'Content-type':'application/json'})});

    alert(data)
    }
}