import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trick-2',
  templateUrl: './trick-2.component.html',
  styleUrls: ['./trick-2.component.scss']
})
export class Trick2Component implements AfterViewInit {
  @ViewChild('box', {static: false}) boxElemRef: ElementRef;
  @ViewChild('container', {static: false}) containerElemRef: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {


  }

}
