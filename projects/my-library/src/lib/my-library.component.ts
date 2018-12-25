import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-myLibrary',
  template: `
    <p>
      my-library works!
    </p>
  `,
  styles: []
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
