import { Component } from '@angular/core';
import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  template: '<p>{{ someProperty}} , {{addDetails}}</p>',
  styles: ['p{color:green; }']
})

export class AppComponent {
constructor(private mediaService: MediaService){
}

someProperty:string = '';
addDetails: string = '';

ngOnInit(){  
  console.log(this.mediaService.cars);
  this.someProperty = this.mediaService.myData();
  this.addDetails = this.mediaService.addDetails();
  } 
}
