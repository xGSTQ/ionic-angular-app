import {Component, ViewChild, OnInit, EventEmitter, Output} from '@angular/core';
import {IonContent, IonModal} from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core/components';

import {LocationFilterService} from '../services/location-filter.service';
import {Location} from '../../assets/location';
import {LOCATIONS} from '../../assets/locations';
import {Filter} from "../filter/filter.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // Define the filter property
  filter: Filter = {
    difficulty: null,
    season: null,
    bestTime: null,
    county: null
  };

  @ViewChild(IonModal) modal: IonModal;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private filterService: LocationFilterService) {}

  @ViewChild(IonContent) content: IonContent;
  locations = LOCATIONS;
  public searchText = '';
  isLoading = true;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  filteredLocations: Location[] = [];

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

  handleFilterApplied(locations: Location[]) {
    this.filteredLocations = locations;
    this.updateFilteredLocations();
  }

  updateFilteredLocations() {
    this.filteredLocations = this.filterService.getFilteredLocations();
  }

  filterLocations() {
    this.filteredLocations = LOCATIONS.filter((location) => {
      return (
        (!this.filter.difficulty || location.difficulty === Number(this.filter.difficulty)) &&
        (!this.filter.season || location.season === this.filter.season) &&
        (!this.filter.bestTime || location.bestTime === this.filter.bestTime) &&
        (!this.filter.county || location.county === this.filter.county)
      );
    });

    this.filterService.setFilteredLocations(this.filteredLocations);
  }

  ngOnInit() {
    this.isLoading = true;
    this.filteredLocations = this.filterService.getFilteredLocations();

    // Check if the filteredLocations array is empty or undefined and trigger the filtering process if needed
    if (!this.filteredLocations || this.filteredLocations.length === 0) {
      this.filterLocations();
    }
    console.log('tab 1 ' + this.filteredLocations);

    // Subscribe to the filterApplied event to update the filteredLocations when the filter is applied
    this.filterService.filterApplied.subscribe(() => {
      this.updateFilteredLocations();
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }


}
