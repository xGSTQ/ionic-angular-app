import { Component, OnInit } from '@angular/core';
import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  // pipes: [FilterPipe]
})
export class FilterComponent implements OnInit {

  selectedCounty: string;
  selectedBestTime: string;
  selectedSeason: string;

  countyOptions = ['Staffordshire', 'Derbyshire', 'Cheshire', 'Greater Manchester', 'West Yorkshire', 'South Yorkshire'];
  bestTimeOptions = ['Sunrise', 'Sunset', 'Midday'];
  seasonOptions = ['Any', 'Spring', 'Autumn', 'Winter'];

  locations = LOCATIONS;

  // locations = [
  //   {
  //     name: 'location one name',
  //     county: 'Staffordshire',
  //     bestTime: 'Sunrise',
  //     season: 'Autumn',
  //   },
  //   {
  //     name: 'location two name',
  //     county: 'Derbyshire',
  //     bestTime: 'Sunrise',
  //     season: 'Autumn',
  //   },
  //   {
  //     name: 'location three name',
  //     county: 'Cheshire',
  //     bestTime: 'Sunrise',
  //     season: 'Winter',
  //   },
  //   {
  //     name: 'location four name',
  //     county: 'Cheshire',
  //     bestTime: 'Sunset',
  //     season: 'Winter',
  //   },
  //   {
  //     name: 'location five name',
  //     county: 'Derbyshire',
  //     bestTime: 'Sunset',
  //     season: 'Spring',
  //   },
  //   {
  //     name: 'location six name',
  //     county: 'Derbyshire',
  //     bestTime: 'Sunrise',
  //     season: 'Spring',
  //   },
  //   {
  //     name: 'location seven name',
  //     county: 'Staffordshire',
  //     bestTime: 'Anytime',
  //     season: 'Any',
  //   },
  // ];

  get selectedValues() {
    return {
      county: this.selectedCounty,
      bestTime: this.selectedBestTime,
      season: this.selectedSeason,
    };
  }

  resetAll() {
    this.selectedCounty = null;
    this.selectedBestTime = null;
    this.selectedSeason = null;
    this.locations = this.locations;
  }

  constructor() {}

  ngOnInit() {

  }
}
