import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  acak:Number;
  txttebak:Number;
  cek:boolean;
  tebak(){
    // alert("masuk");
    this.acak = Math.floor(Math.random()*20)+1;
    alert(this.acak);
    if(this.txttebak == null){
      alert("harus diisi");
    }
    else {
      if(this.txttebak == this.acak){
        this.cek=true;
      }
      else{
        this.cek=false;
      }
    }
    this.txttebak=null;
  }
}
