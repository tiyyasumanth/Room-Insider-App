import {Injectable,OnInit, NgZone} from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobalUrl } from './globalurl';


@Injectable()
export class updatadataservices extends AppGlobalUrl{
    
    constructor(private http:HttpClient){
        super();
    }

    updatedatainfo(data:any):Observable<any>{
        
        //  return this.http.put('http://192.168.0.100:89/updaterentinfo/',data,{headers:
        return this.http.put(this.baseAppUrl+'/updaterentinfo/',data,{headers:
    new HttpHeaders({'Content-type':'application/json'})});
    }
}