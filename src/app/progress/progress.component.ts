import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  dotDomoffSetLeft: any;
  isMouseDown: Boolean = false;
  mMouseDownX: any;
  mMaxOffeWidth: any;
  mBlurValue: Number;
  @Output() blurChange = new EventEmitter<Number>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) {
      return;
    }
    let mouseMoveX = event.clientX;
    let moveX = Math.min(this.mMaxOffeWidth, Math.max(-1,  this.dotDomoffSetLeft + (mouseMoveX - this.mMouseDownX)));
    this.mBlurValue = Math.round(Math.max(0, moveX / this.mMaxOffeWidth) * 20);

    let progressDot = this.element.nativeElement.querySelector('.progress-dot');
    progressDot.style.marginLeft = Math.max(0, moveX) + 'px';

    let progressBar = this.element.nativeElement.querySelector('.progress-bar');
    progressBar.style.width = moveX + 'px';

    this.blurChange.emit(this.mBlurValue);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isMouseDown = false;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.mMouseDownX = event.clientX;

    let progressDot = this.element.nativeElement.querySelector('.progress-dot');
    this.dotDomoffSetLeft = progressDot.offsetLeft;

    this.element.nativeElement.querySelector('.progress-container');
    let parentWidth = this.element.nativeElement.offsetWidth;
    this.mMaxOffeWidth = parentWidth - progressDot.offsetWidth;
  }

  @HostListener('mouseup') onMouseUp() {
    this.isMouseDown = false;
  }

}
