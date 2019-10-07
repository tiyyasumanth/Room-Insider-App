import {Component,ViewChildren,Output,EventEmitter} from '@angular/core'
// import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {AddNewPersonservices} from '../ServicesBlock/addnewpersonservice'


@Component({
    selector: 'addnew-app',
    templateUrl: './app.addnew.html',
    providers:[AddNewPersonservices]
})
export class AddNewComponent {
    today: any

  constructor(private addpersonser:AddNewPersonservices){
    // this.today = this.datePipe.transform(Date.now, 'yyyy-MM-dd');
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1); //January is 0!
    var yyyy = today.getFullYear();
    
    
    this.today=mm + '/' + dd + '/' + yyyy;
  }
  fname:string;
  lname:string;
  comments:string;
  adddate:string
  data:any;
  username:string=sessionStorage.getItem('username')
  closePopup:boolean=false;
  
  @Output()
  closeRentailPopup: EventEmitter<boolean>=new EventEmitter<boolean>();
  onCloseRentailPopup(){
    this.closeRentailPopup.emit(this.closePopup);
  }
  
  onSubmit():void{
    // alert(this.username)
  this.data =JSON.stringify({'fname':this.fname,'lname':this.lname,'comm1':this.comments,'addeddate':this.today,'username':this.username})
  // alert(this.data)
 
  // document.getElementById('popup1').disabled=true;
  var hideForm=(<HTMLInputElement>document.getElementById('creatId'))
  hideForm.value="Created successfully"
  hideForm.disabled=true;
  // document.getElementById('suclableval').innerHTML='Data Inserted Succesfully.....'
  // console.log(this.fuldata)
   this.addpersonser.savenewpersoninfo(this.data).subscribe((res)=>{
     

 

},err => {
   alert('Error: ' + err.error);
   alert('Name: ' + err.name);
   alert('Message: ' + err.message);
   alert('Status: ' + err.status);
 });
  }
}