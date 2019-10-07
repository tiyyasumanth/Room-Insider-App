import {Component,ViewChildren,Output,EventEmitter} from '@angular/core'
import { Router } from '@angular/router';
import {roomrentservices} from '../ServicesBlock/rentaildetailservice'
import { Alert } from 'selenium-webdriver';

@Component({
    selector: 'rentaildetails-app',
    templateUrl: './app.rentaildetails.html',
     providers:[roomrentservices]
})
export class RentailDetailspageComponent {

  constructor(private roomser:roomrentservices){

  }
    roomRentAmount:number;
    netBill:number;
    currentBill:number;
    waterBill:number;
    roomAccessories:number;
    roomMaintainceBill:number;
    otherBills:number;
    ricebill:number;
    sweeperbill:number;
    comments:string;
    fuldata:Object;
    username:string=sessionStorage.getItem('username')

    

    onSubmit():void{
      // alert(this.username)
    this.fuldata =JSON.stringify({'roomrent':this.roomRentAmount,'internet':this.netBill,'powerbill':this.currentBill,
    'waterbill':this.waterBill,'provisionsbill':this.roomAccessories,'maintainencebill':this.roomMaintainceBill,
    'otherbills':this.otherBills,'ricebill':this.ricebill,'sweeperbill':this.sweeperbill,'comments':this.comments,'username':this.username})
   
    // document.getElementById('popup1').disabled=true;
    var hideForm=(<HTMLFieldSetElement>document.getElementById('popup1'))
    hideForm.disabled=true;
    document.getElementById('suclableval').innerHTML='Data Inserted Succesfully.....'
    // console.log(this.fuldata)
     this.roomser.postrentdata(this.fuldata).subscribe((res)=>{
      // alert(res)

   
 
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
     
    //  document.getElementById('popup1').disabled=true;
    }
    @ViewChildren('maindiv') public mdiv;
    
    closePopup:boolean=false;

    @Output()
    closeRentailPopup: EventEmitter<boolean>=new EventEmitter<boolean>();

    onCloseRentailPopup(){
      this.closeRentailPopup.emit(this.closePopup);
    }

   

    
}