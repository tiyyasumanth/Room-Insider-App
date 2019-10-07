import {Component,OnInit,OnDestroy} from '@angular/core'
import { Ilogindetails } from '../Interfaces/logininterface';
import {loginservices} from '../ServicesBlock/loginservice'
import { Router } from '@angular/router';
import {AppComponent} from '../app.component'


@Component({
    selector: 'login-app',
    templateUrl: './app.login.html',
    providers:[loginservices]
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        this._router.navigate(['./login']);
        
    }

    ngOnDestroy(): void {

        this.isLogin=false
    
      }

    // username:string='Admin'
    // password:string='Admin'

    username:string=''
    password:string=''
    isLogin=true
    photo:any='assets/images/Best-HD-Wallpaper1_zps324294d0.jpg'
    isNewUserClicked:boolean=false
    
    
   
    constructor(private _router: Router,private logservice:loginservices,private appCom:AppComponent) {
        this.photo = "assets/images/BestHDWallpaper1zps324294d0.jpg";
       

    }
    newUser():void{
        this.isNewUserClicked=true;
    }
    cancleUser():void{
        this.isNewUserClicked=false;
    }
    loginauthntication():void{
     this.logservice.getlogindata(this.username,this.password).subscribe((res)=>{
         if(res['message']=='Y')
         {
            
            sessionStorage.clear()
            sessionStorage.setItem('username',this.username)
            this._router.navigate(['./Details']);
            this.isLogin=false
            
         }
         else if(res['message']=='N')
         {
            alert('Logind Failed')
         }

      
    
    },err => {
        // console.log('Error: ' + err.error);
        // console.log('Name: ' + err.name);
        // console.log('Message: ' + err.message);
        // console.log('Status: ' + err.status);
        alert('Error: ' + err.error);
        alert('Name: ' + err.name);
        alert('Message: ' + err.message);
        alert('Status: ' + err.status);
      });
    }

}