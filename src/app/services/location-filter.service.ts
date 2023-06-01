import {Injectable, EventEmitter } from '@angular/core';
import {Location} from '../../assets/location';
import {Filter} from '../filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class LocationFilterService {
  filterApplied: EventEmitter<any> = new EventEmitter<any>();

  private filter: Filter = {
    difficulty: null,
    season: null,
    bestTime: null,
    county: null
  };

  private filteredLocations: Location[];

  constructor() {
  }

  getFilter(): Filter {
    return this.filter;
  }

  setFilter(filter: Filter): void {
    this.filter = filter;
  }

  getFilteredLocations(): Location[] {
    return this.filteredLocations;
  }

  setFilteredLocations(locations: Location[]) {
    this.filteredLocations = locations;
  }
}
