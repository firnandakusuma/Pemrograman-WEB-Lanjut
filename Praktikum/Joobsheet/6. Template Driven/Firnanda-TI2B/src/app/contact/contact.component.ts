import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
// export class ContactComponent implements OnInit {
//   @Input() nama:String;
//   @Input() comment:String;

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class ContactComponent {
  log(z) {
    console.log(z);
  }

submit(form){
  console.log(form);
  form.valid;
}
}