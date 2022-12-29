import {Component, ViewChild, OnInit} from '@angular/core';
import {IonContent} from '@ionic/angular';

import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  menuType: string = 'push';
  @ViewChild(IonContent) content: IonContent;
  locations = LOCATIONS;
  public searchText = '';
  isLoading = true;
  logs: string[] = [];

  public selectedCounty = 'All';
  public selectedSeason = 'All';
  selectedBestTime: string;


  constructor() {}

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

}
