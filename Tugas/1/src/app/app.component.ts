import { DService } from './d.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Firnanda Kusuma Pratama';
  alamat = 'jln. Klayatan gang 02';
  tggl = Date.now();
  hobi : any[];
  constructor(private d:DService){}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hobi = this.d.getHobi();
  }
}
