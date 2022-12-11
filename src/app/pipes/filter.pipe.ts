import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(locations: any[], selectedValues: any): any[] {
    if (!locations) return [];
    if (!selectedValues) return locations;

    // Return filtered view
    return locations.filter((location) => {
      return (
        (!selectedValues.county || location.county === selectedValues.county) &&
        (!selectedValues.bestTime ||
          location.bestTime === selectedValues.bestTime) &&
        (!selectedValues.season || location.season === selectedValues.season)
      );
    });
  }
}
