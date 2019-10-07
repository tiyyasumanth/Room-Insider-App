import {Component,ViewChildren,ViewChild,ElementRef} from '@angular/core'
import { Ilogindetails } from '../Interfaces/logininterface';
import { Router } from '@angular/router';
import {Historyservices} from '../ServicesBlock/userhistoryservice'
import {activedataservices} from '../ServicesBlock/getactivedataservice'
import {updatadataservices} from '../ServicesBlock/updateinfoservice'
import {RentailDetailspageComponent} from '../PopupsBlock/app.rentaildetailscomponent'

@Component({
    selector: 'mainpage-app',
    templateUrl: './app.mainpage.html',
    providers:[Historyservices,activedataservices,updatadataservices],
    styleUrls:['./app.validations.css']
})
export class MainpageComponent {
  istohiderentailsdetailspopup:boolean=false;
  istoshowhistoricdatadiv:boolean=false;
  istohideaddnewpopup:boolean=false;
  username:string=''
  hisserdata:any
  activedata:any
  firstval:string;
  dueamount:string;
  
  flipblockcard:boolean=true;
  fliptablecard:boolean=false;
  
  amounttopay:string;
  rentStatus:string;
  personstatus:string;
  updatedata:any;
  recordstatus:string
  isclick:boolean=true

  constructor(private _router: Router,private hisservice:Historyservices,private actservice:activedataservices,private updateservice:updatadataservices){
   this.username=sessionStorage.getItem('username')
   console.log(this.username)
   this.getactivedata()
  }

    
  openRentalDetailPopup():void{
    this.istohideaddnewpopup=false
    this.istohiderentailsdetailspopup=true
    
  }
  closeRentalDetailPopup(val:boolean):void{
    
    this.istohiderentailsdetailspopup=false
  }

  closenewRentalDetailPopup(val:boolean):void{
    
    this.istohideaddnewpopup=false
  }
  openaddPopup():void{
    this.istohiderentailsdetailspopup=false
    this.istohideaddnewpopup=true
  }

  fliptables():void{
   

    if(this.flipblockcard)
    {
      this.flipblockcard=false;
      this.fliptablecard=true;

      (<HTMLSelectElement>document.getElementById("flipid")).innerHTML="flip to card view"
    }
    else
    {
      this.flipblockcard=true;
      this.fliptablecard=false;
      (<HTMLSelectElement>document.getElementById("flipid")).innerHTML="flip to table view"
    }
  }

  setvalidations(flag:string){
    let cssClasses;
    if(flag == 'Not Paid' || flag == 'Partial Paid') {  
         cssClasses = {
      'error': true
      
   }	
    } else {  
         cssClasses = {
      'noerror': true
   }	
    }
    return cssClasses;
 }	

  
  
  closeaddPopup(val:boolean):void{
    
    this.istohideaddnewpopup=false
  }
  onclickeve():void{
    var acc = document.getElementsByClassName("accordion");
    var i;
    if(this.isclick)
    {
    for (i = 0; i < acc.length; i++) {
      
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          
          panel.style.maxHeight = null;
        } else {
          
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
  }
  this.isclick=false
  }

 

  saveRecord(val:string):void{
    this.amounttopay="Amounttopay".concat(val)
    this.rentStatus="rentstatus".concat(val)
    this.personstatus="personstatus".concat(val)
    var tAmount = (<HTMLInputElement>document.getElementById(this.amounttopay)).value;
    var rStatus=(<HTMLSelectElement>document.getElementById(this.rentStatus)).value;
    var pStatus=(<HTMLSelectElement>document.getElementById(this.personstatus)).value;

    var id=val;

    this.updatedata =JSON.stringify({'unbillamount':tAmount,'status':rStatus,'pstatus':pStatus,'personid':id,'username':this.username})

    this.updateservice.updatedatainfo(this.updatedata).subscribe((res)=>{
    
  
   
  
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
     
     (<HTMLInputElement>document.getElementById('statusupdated'.concat(val))).innerText=(<HTMLInputElement>document.getElementById('statusupdated'.concat(val))).innerText.replace('----Record updated successfull','').concat('----Record updated successfull');
     (<HTMLInputElement>document.getElementById('btndiv'.concat(val))).disabled=true;
  }
  showHistoricalData():void{
    this.istoshowhistoricdatadiv=true
    this.hisservice.getuserhistorydata(this.username).subscribe((res)=>{this.hisserdata=res
    
  
   
  
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

  getactivedata():void{
    
    this.actservice.getactiveuserdata(this.username).subscribe((res)=>{this.activedata=res
      
    
  
   
  
  },err => {
     alert('Error: ' + err.error);
     alert('Name: ' + err.name);
     alert('Message: ' + err.message);
     alert('Status: ' + err.status);
   });
  }

  setdata(dt:any):void{
    var i;
    // var tAmount = (<HTMLInputElement>document.getElementById(this.totalAmoutnt)).value;
    // var rStatus=(<HTMLSelectElement>document.getElementById(this.rentStatus)).value;
    for (i = 0; i < dt.length; i++) {
      alert(dt[i].STATUS);
      alert("rentstatus".concat(dt[i].PERSON_ID));
      if(dt[i].STATUS!=null)
      {
        alert((<HTMLSelectElement>document.getElementById("rentstatus".concat(dt[i].PERSON_ID))));
        
        (<HTMLSelectElement>document.getElementById("rentstatus".concat(dt[i].PERSON_ID))).value="1"
      }
    }
  }

  onSearchChange(searchValue : string,id:string ) { 
    
    if(this.firstval!=id)
    {
      
      this.amounttopay=(<HTMLInputElement>document.getElementById("Amounttopay".concat(id))).value;
      this.firstval=id
    }

    var ta=(<HTMLInputElement>document.getElementById("TotalAmount".concat(id))).value;
    var pa=(<HTMLInputElement>document.getElementById("PaidAmount".concat(id))).value;
    (<HTMLInputElement>document.getElementById("Amounttopay".concat(id))).value= String(Number(this.amounttopay)- Number(pa))
  }



}