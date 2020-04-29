import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nz-comp',
  templateUrl: './nz-comp.component.html',
  styleUrls: ['./nz-comp.component.scss']
})
export class NzCompComponent implements OnInit {

  @Input()
  nzTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
