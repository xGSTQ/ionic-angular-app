import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from '../../assets/location';
import { Filter } from './filter.model';
import { LOCATIONS } from "../../assets/locations";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() filterApplied = new EventEmitter<Location[]>();

  filter: Filter;
  filteredLocations: Location[] = LOCATIONS;

  constructor() {}

  ngOnInit() {
    this.filter = {
      difficulty: null,
      season: null,
      bestTime: null,
      county: null
    };
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

    this.filterApplied.emit(this.filteredLocations);
    console.log(this.filteredLocations.length);
    console.table(this.filteredLocations);
  }
}
