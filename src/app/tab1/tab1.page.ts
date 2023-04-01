import {Component, ViewChild, OnInit, EventEmitter, Output} from '@angular/core';
import {IonContent} from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  menuType: string = 'push';
  @ViewChild(IonContent) content: IonContent;
  locations = LOCATIONS;
  public searchText = '';
  isLoading = true;
  logs: string[] = [];

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  public selectedCounty = 'All';
  public selectedSeason = 'All';
  selectedBestTime: string;

  cancel() {
    this.modal.dismiss(null, 'cancel').then();
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm').then();
    this.notifyParent.emit('Some value to send to the parent');

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

}
