import { Component } from '@angular/core';

@Component({
  selector: 'app-usa-modal',
  templateUrl: './usa-modal.component.html',
  styleUrls: ['./usa-modal.component.scss']
})
export class UsaModalComponent {

  showDialog() {
    let modal_t = document.getElementById('modal_1')
    //document.documentElement.style.setProperty('--modal-top', '255px');
    //document.documentElement.style.setProperty('--modal-left', '555px');
    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
  }

  closeDialog() {
    let modal_t = document.getElementById('modal_1')
    modal_t.classList.remove('sshow')
    modal_t.classList.add('hhidden');
  }

}
