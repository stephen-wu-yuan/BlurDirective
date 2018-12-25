import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() mBlurValue: any = 0;

  ngOnInit(): void {
  }

  setBlurVlue(value: number) {
    console.log('setBlurVlue===' + value);
    this.mBlurValue = value;
}

}
