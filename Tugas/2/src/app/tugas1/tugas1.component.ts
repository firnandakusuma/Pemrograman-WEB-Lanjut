import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas1',
  templateUrl: './tugas1.component.html',
  styleUrls: ['./tugas1.component.css']
})
export class Tugas1Component implements OnInit {
  title = '3 Authors';

  arr = [
    {id : 0, baris : 'author1'},
    {id : 1, baris : 'author2'},
    {id : 2, baris : 'author3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
