import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface Coords {
  x: number;
  y: number;
}

@Component({
  selector: 'app-trick-1',
  templateUrl: './trick-1.component.html',
})
export class Trick1Component implements AfterViewInit {
  @ViewChild('box') boxElemRef: ElementRef<HTMLElement>;
  @ViewChild('container') containerElemRef: ElementRef;

  box: { elem: HTMLElement; bounds: ClientRect, initialCoords?: Coords, coords?: Coords, rotation?: Coords};
  containerElem: any;

  ngAfterViewInit() {
    this.containerElem = this.containerElemRef.nativeElement;
    this.box = {
      elem: this.boxElemRef.nativeElement,
      bounds: this.boxElemRef.nativeElement.getBoundingClientRect()
    };
    this.box.elem.addEventListener('pointerdown', (event) => {
      if (event.isPrimary) {
        const containerBounds = this.containerElem.getBoundingClientRect();
        const containerCoords = {
          x: (containerBounds.left + scrollX),
          y: (containerBounds.top + scrollY),
        };
        if (this.box.hasOwnProperty('coords')) {
          this.box.initialCoords = {x: this.box.coords.x, y: this.box.coords.y};
        } else {
          this.box.initialCoords = {x: 0, y: 0};
          this.box.coords = {x: 0, y: 0};
        }
        this.box.rotation = {x: 0, y: 0};

        const pointer: any = {
          startX: event.pageX - containerCoords.x,
          startY: event.pageY - containerCoords.y
        };
        pointer.x = pointer.startX;
        pointer.y = pointer.startY;
        pointer.timestamp = Date.now();
        this.box.elem.style['background-color'] = 'white';

        const move = function () {
          if (event.isPrimary) {
            const prevX = pointer.x, prevY = pointer.y, prevTimestamp2 = pointer.timestamp;
            pointer.x = event.pageX - containerCoords.x;
            pointer.y = event.pageY - containerCoords.y;
            pointer.timestamp = Date.now();
            const delta = pointer.timestamp - prevTimestamp2;

            // speed px/msec * 30 limit 30
            pointer.dx = ((pointer.x - prevX) / delta) * 100; // Math.min(((pointer.x - prevX) / delta) * 100, 60);
            pointer.dy = (pointer.y - prevY) * 6; // Math.min(((pointer.y - prevY) / delta) * 100, 60);
            // this.box.elem.innerText = "dx=" + pointer.dx + ", dy=" + pointer.dy
          }
        };

        let nextFrameRequestId: any;

        const stop = () => {
          if (event.isPrimary) {
            this.containerElem.removeEventListener('pointermove', move);
            this.containerElem.removeEventListener('pointerup', stop);
            cancelAnimationFrame(nextFrameRequestId);
          }
        };
        this.containerElem.addEventListener('pointermove', move);
        this.containerElem.addEventListener('pointerup', stop);

        let prevTimestamp = null;
        const draw = (timestamp) => {
          const delta = (!prevTimestamp) ? timestamp : timestamp - prevTimestamp;
          const speed = 1.1 * delta; // 1.1px/msec
          const rotationSpeed = 6; // 0.5 * delta;
          prevTimestamp = timestamp;

          let leftOffset = this.box.initialCoords.x + pointer.x - pointer.startX;

          if (leftOffset > this.box.coords.x + rotationSpeed) {
            leftOffset = this.box.coords.x + speed;
          } else if (leftOffset < this.box.coords.x - speed) {
            leftOffset = this.box.coords.x - speed;
          }

          if (leftOffset < 0) {
            leftOffset = 0;
          } else if (leftOffset + this.box.bounds.width > containerBounds.width) {
            leftOffset = containerBounds.width - this.box.bounds.width;
          }

          let topOffset = this.box.initialCoords.y + pointer.y - pointer.startY;
          if (topOffset > this.box.coords.y + speed) {
            topOffset = this.box.coords.y + speed;
          } else if (topOffset < this.box.coords.y - speed) {
            topOffset = this.box.coords.y - speed;
          }
          if (topOffset < 0) {
            topOffset = 0;
          } else if (topOffset + this.box.bounds.height > containerBounds.height) {
            topOffset = containerBounds.height - this.box.bounds.height;
          }

          // let rotationX;
          // if (this.box.rotation.x < pointer.dy) {
          //   rotationX = (this.box.rotation.x + rotationSpeed > pointer.dy) ? pointer.dy : this.box.rotation.x + rotationSpeed;
          // } else if (this.box.rotation.x > pointer.dy) {
          //   rotationX = (this.box.rotation.x - rotationSpeed < pointer.dy) ? pointer.dy : this.box.rotation.x - rotationSpeed;
          // } else rotationX =  pointer.dy;
          //
          // let rotationY;
          // if (this.box.rotation.y < pointer.dx) {
          //   rotationY = (this.box.rotation.y + rotationSpeed > pointer.dx) ? pointer.dx : this.box.rotation.y + rotationSpeed;
          // } else if (this.box.rotation.y > pointer.dx) {
          //   rotationY = (this.box.rotation.y - rotationSpeed < pointer.dx) ? pointer.dx : this.box.rotation.y - rotationSpeed;
          // } else rotationY =  pointer.dx;
          // rotationY = -rotationY;

          if (this.box.rotation.x > (pointer.dx + rotationSpeed) || this.box.rotation.x < (pointer.dx - rotationSpeed)) {
            this.box.rotation.x += (this.box.rotation.x > pointer.dx) ? -rotationSpeed : rotationSpeed;
          } else if (this.box.rotation.x > (pointer.dx + (rotationSpeed / 10))
            || this.box.rotation.x < (pointer.dx - (rotationSpeed / 10))) {
            this.box.rotation.x += (this.box.rotation.x > pointer.dx) ? -(rotationSpeed / 10) : (rotationSpeed / 10);
          }

          if (this.box.rotation.y > (pointer.dy + rotationSpeed) || this.box.rotation.y < (pointer.dy - rotationSpeed)) {
            this.box.rotation.y += (this.box.rotation.y > pointer.dy) ? -rotationSpeed : rotationSpeed;
          } else if (this.box.rotation.y > (pointer.dy + (rotationSpeed / 10)) ||
            this.box.rotation.y < (pointer.dy - (rotationSpeed / 10))) {
            this.box.rotation.y += (this.box.rotation.y > pointer.dy) ? -(rotationSpeed / 10) : (rotationSpeed / 10);
          }

          this.box.elem.style.left = `${leftOffset}px`;
          this.box.elem.style.top = `${topOffset}px`;
          console.log(this.box.rotation.x);

          this.box.elem.style.transform = `rotateX(${this.box.rotation.x}deg)`;
          // rotateY(${-this.box.rotation.y}deg)`;// translate3d(${leftOffset}px, ${topOffset}px, 0)`;

          this.box.coords.x = leftOffset;
          this.box.coords.y = topOffset;
          // this.box.rotation.x = rotationX;
          // this.box.rotation.y = rotationY;

          // this.box.elem.innerText = 'rx=' + this.box.rotation.x + ', ry=' + this.box.rotation.y;

          nextFrameRequestId = requestAnimationFrame(draw);
        };

        nextFrameRequestId = requestAnimationFrame(draw);
      }
    });
  }

}
