import {Injectable,OnInit, NgZone} from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobalUrl } from './globalurl';


@Injectable()
export class Historyservices extends AppGlobalUrl{
    
    constructor(private http:HttpClient){
        super();
    }

    getuserhistorydata(username:string):Observable<any>{
        //  return this.http.post('http://192.168.0.104:89/hisdata/',JSON.stringify({'username':username}),{headers:
        return this.http.post(this.baseAppUrl+'/hisdata/',JSON.stringify({'username':username}),{headers:
    new HttpHeaders({'Content-type':'application/json'})});
    }
}