import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MediaService {
  constructor() { }
  cars=['abc' , 'def' , 'ghi' ]
  myData(){
   return 'service component data'
  }
  addDetails(){
   return 'welcome to angular data service concepts'
   }
  myObj(){
  console.log(this.records);
  }
  getData(){
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {     
        var myObj = JSON.parse(this.responseText);            
          var response = xhttp.responseText;
          console.log("ok"+response);
          var myJSON = JSON.stringify(myObj);
          document.getElementById("demo").innerHTML = myJSON
      }
      for(var i = 0; i < myJSON.length; i++) {
      let k:any  = myJSON[i]['key'];
      let data:any = myJSON[i]['data'];
        //do something with k or data...
    }
  };
  xhttp.open("GET", "https://www.w3schools.com/angular/customers.php", true);  
  xhttp.send();
}
records(){  
}}


