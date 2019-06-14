import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {
  @Input() x = 0;
  @Input() y = 0;

  // translate3d
  private topStart: number;
  private leftStart: number;
  private md: boolean;

  constructor(public element: ElementRef) {}

  ngOnInit() {
    // this.element.nativeElement.style.transform = `translate3d(${this.x}px,${this.y}px,0)`;
    // css changes
    // if (this._allowDrag) {
    //   this.element.nativeElement.style.position = 'relative';
    //   this.element.nativeElement.className += ' cursor-draggable';
    // }
  }

  updatePosition(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.element.nativeElement.style.transform = `translate3d(${x}px,${y}px,0)`;
  }

  @HostListener('dragstart', ['$event'])
  onPointerDown(event: DragEvent) {
    // this.md = true;
    // this.topStart = event.clientY - this.y; // this.element.nativeElement.style.top.replace('px', '');
    // this.leftStart = event.clientX - this.x; // this.element.nativeElement.style.left.replace('px', '');
  }

  @HostListener('dragend', ['$event'])
  onPointerCancel(event: DragEvent) {
    // this.md = false;
  }

  @HostListener('drag', ['$event'])
  onPointerMove(event: DragEvent) {
    // if (this.md) {
    //   this.updatePosition(event.clientX - this.leftStart, event.clientY - this.topStart);
    // }
  }

  // @HostListener('pointerdown', ['$event'])
  // onPointerDown(event: PointerEvent) {
  //   if (event.isPrimary && event.button === 0 && event.buttons === 1) {
  //     this.element.nativeElement.setPointerCapture(event.pointerId);
  //
  //     this.md = true;
  //     this.topStart = event.clientY - this.y; // this.element.nativeElement.style.top.replace('px', '');
  //     this.leftStart = event.clientX - this.x; // this.element.nativeElement.style.left.replace('px', '');
  //   }
  // }
  //
  // @HostListener('pointercancel', ['$event'])
  // onPointerCancel(event: PointerEvent) {
  //   console.log('here')
  //   this.element.nativeElement.releasePointerCapture(event.pointerId);
  //   this.md = false;
  // }
  //
  // // @HostListener('pointerup', ['$event'])
  // // onPointerUp(event: PointerEvent) {
  // //   this.md = false;
  // // }
  //
  // @HostListener('pointermove', ['$event'])
  // onPointerMove(event: PointerEvent) {
  //   console.log('what?')
  //   if (event.isPrimary && this.md) {
  //     this.updatePosition(event.clientX - this.leftStart, event.clientY - this.topStart);
  //   }
  // }
  //
  // // @HostListener('pointerleave', ['$event'])
  // // onPointerLeave(event: PointerEvent) {
  // //   this.md = false;
  // // }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.md = true;
    this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
    this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace('px', '');
    event.stopPropagation();
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd() {
    this.md = false;
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.md /*&& this._allowDrag*/) {
      this.element.nativeElement.style.top = ( event.changedTouches[0].clientY - this.topStart ) + 'px';
      this.element.nativeElement.style.left = ( event.changedTouches[0].clientX - this.leftStart ) + 'px';
    }
    event.stopPropagation();
  }
}
