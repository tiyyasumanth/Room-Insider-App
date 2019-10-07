import {Injectable,OnInit, NgZone} from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppGlobalUrl } from './globalurl';


@Injectable()
export class loginservices extends AppGlobalUrl{
    
    constructor(private http:HttpClient){
        super();
    }

    getlogindata(username:string,password:string):Observable<any>{
        
        return this.http.post(this.baseAppUrl+'/autlogin/',JSON.stringify({'username':username,'password':password}),{headers:
        // return this.http.post('http://05c359ba.ngrok.io/autlogin/',JSON.stringify({'username':username,'password':password}),{headers:
    new HttpHeaders({'Content-type':'application/json'})});
    }
}