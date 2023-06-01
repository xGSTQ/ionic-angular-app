import {Component, ViewChild, OnInit} from '@angular/core';
import {IonContent} from '@ionic/angular';
import {IonModal} from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core/components';

import {LocationFilterService} from '../services/location-filter.service';
import {Location} from '../../assets/location';
import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonContent) content: IonContent;
  locations = LOCATIONS;
  public searchText = '';

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  constructor(private filterService: LocationFilterService) {}

  filteredLocations: Location[];

  handleFilterApplied(filteredLocations: Location[]) {
    this.filteredLocations = filteredLocations;
    console.log('Filtered Locations:', filteredLocations);
  }

  ngOnInit() {
    this.filteredLocations = this.filterService.getFilteredLocations();
    console.log(this.filteredLocations)
  }

  cancel() {
    this.modal.dismiss(null, 'cancel').then();
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm').then();
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
