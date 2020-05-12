import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 's-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() top;
  @Input() left;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--modal-top', this.top + 'px');
    document.documentElement.style.setProperty('--modal-left', this.left + 'px');
    /*
    // we added this so that when the backdrop is clicked the modal is closed.
    this.el.nativeElement.addEventListener('click', () => {
       this.close()
    })*/
  }

  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }

}
