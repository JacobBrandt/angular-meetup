import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBurning]'
})
export class BurningDirective {
  burning: string;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    if(this.burning === "high") {
      this.el.nativeElement.style["text-shadow"] = 'white 0px -1px 4px, yellow 0px -3px 12px, rgb(255, 128, 0) 0px -2px 5px, red 0px -4px 25px';
    }
      else {
    this.el.nativeElement.style["text-shadow"] = '0px 0px 4px white, 0px 0px 2px yellow, 0px 0px 5px #ff8000, 0px 0px 5px red';
  }
  }

}