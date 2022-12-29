import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() locations: Array<any>;
  @Output() itemsChange = new EventEmitter<any[]>();

  selectedCounty: string;
  selectedBestTime: string;
  selectedSeason: string;

  countyOptions = ['Staffordshire', 'Derbyshire', 'Cheshire', 'Greater Manchester', 'West Yorkshire', 'South Yorkshire'];
  bestTimeOptions = ['Sunrise', 'Sunset', 'Midday'];
  seasonOptions = ['Any', 'Spring', 'Autumn', 'Winter'];

  get selectedValues() {
    return {
      county: this.selectedCounty,
      bestTime: this.selectedBestTime,
      season: this.selectedSeason,
    };

  }

  apply() {
    this.locations = LOCATIONS;

    // const keysExact  = ['county', 'season', 'bestTime'];
    // const valuesExact  = ['Staffordshire', 'Spring', 'Sunrise']; // Grindon Moor

    // Return the keys of the dropdowns selected for the filter
    let keysExact = [];
    if (this.selectedValues.county) {
      keysExact.push('county');
    }
    if(this.selectedValues.season) {
      keysExact.push('season');
    }
    if(this.selectedValues.bestTime) {
      keysExact.push('bestTime');
    }

    // Return the values from the dropdowns
    const valuesExact  = [this.selectedValues.county, this.selectedValues.season, this.selectedValues.bestTime];

    // If selecting 'All' in the dropdowns
    if(this.selectedValues.county === 'All') {
      valuesExact.splice(0,1,'Staffordshire', 'Derbyshire', 'Cheshire', 'Greater Manchester', 'West Yorkshire', 'South Yorkshire');
    }

    if(this.selectedValues.season === 'All') {
      valuesExact.splice(1,1, 'Any', 'Spring', 'Autumn', 'Winter')
    }

    if(this.selectedValues.bestTime === 'All') {
      valuesExact.splice(2,1, 'Sunrise', 'Sunset', 'Midday')
    }

    // console.log(this.locations)
    // console.log(keysExact)
    // console.log(valuesExact)

    const resultExact = this.locations.filter((item) =>
      keysExact.every( (key) =>
        valuesExact.some((val) => item[key].includes(val))
      )
    );

    // console.log(resultExact)

    this.itemsChange.emit(resultExact);
  }

  resetAll() {
    this.selectedCounty = null;
    this.selectedBestTime = null;
    this.selectedSeason = null;
    this.locations = LOCATIONS;
    this.itemsChange.emit(this.locations);
  }


  ngOnInit() {
  }
}
