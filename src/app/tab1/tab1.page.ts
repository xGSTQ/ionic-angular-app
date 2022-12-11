import {Component, ViewChild, OnInit} from '@angular/core';
import {IonContent} from '@ionic/angular';

import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  menuType: string = 'reveal';
  @ViewChild(IonContent) content: IonContent;
  locations = LOCATIONS;
  public searchText = '';
  isLoading = true;
  logs: string[] = [];
  public selectedCounty = 'All';
  public selectedSeason = 'All';

  // selectedCounty: string;
  selectedBestTime: string;
  // selectedSeason: string;

  currentFood = undefined;

  // public filter = [];

  filter = {
    county: ["Staffordshire"],
    season: ["Autumn"],
    difficulty: 1
  };

  constructor() {
  }

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 500);

  }


  // Filter by County Test
  pushLog(msg) {
    this.logs.unshift(msg);
  }

  get selectedValues() {
    return {
      county: this.selectedCounty,
      bestTime: this.selectedBestTime,
      season: this.selectedSeason,
    };
  }


  // Test a filter on multiple dropdowns
  // test function
  testFilter = (filter) => {
    console.log('------ with filter: ', filter)

    let thefilter = Object.entries(filter);
    const result = this.locations.filter(item => {
      let c = 0;
      // can only return true if each condition passes
      thefilter.length === 0 || thefilter
        .map(([key, val]) => {
          if (!Array.isArray(val)) val = [val]
          // @ts-ignore
          c += val.filter(v => {
            return item[key] === v;
          }).length;
        })
      return c >= thefilter.length
    })

    this.locations = result;
    console.log(this.locations)
    console.log('Found ' + result.length + ' results: ', result);
  }

// testing


  /* ---------- */

  // filter = {
  //   bike: "Mountain"
  // }
  // testFilter(filter)

  /* ---------- */

  // filter = {
  //   bike: "Mountain",
  //   country: ["FR", "USA", "GB"]
  // }
  // testFilter(filter)

  /* ---------- */

  // filter = {}
  // testFilter(filter)

  // end test filter


// test
//   captureQuery(e) {
//     let query = e.detail.value
//     return  this.locations.filter(this.search, query);
//   }
//   search(user) {
//     return Object.keys(this).every((key) => this.locations[key] === this[key]);
//   }
// end test

  // Filter by County
  handleChangeCounty(e) {
    this.selectedCounty = e.detail.value || 'All';
    // this.pushLog('ionChange fired with value: ' + e.detail.value);

    if (e.detail.value === 'all') {
      this.locations = LOCATIONS;
    } else {
      this.filterByCounty(e.detail.value);
    }
    // console.log(this.locations)
  }

// Filter by Season
  handleChangeSeason(e) {
    // this.selectedSeason = e.detail.value || 'All';
    this.pushLog('ionChange fired with value: ' + e.detail.value);

    this.testFilter({season: [e.detail.value]})
  }


  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

  // newTest = [];
  // Iterate through the locations object to get all the name
  // locationsByName(): void {
  //   let i = 0;
  //   while (i < this.locations.length) {
  //     this.newTest.push(this.locations[i].name.toLowerCase());
  //     i++;
  //   }
  // }


  // Filtering the locations by county
  filterByCounty(county: any): void {
    // this.locations = LOCATIONS;
    const filterBy = county;
    console.log(filterBy)
    this.locations = this.locations.filter((i) => filterBy.includes(i.county));
    // this.filter = this.locations
    // this.searchText = county
  }

  // Filtering the locations by Season
  filterBySeason(query: any): void {
    // const filterBy = season;
    console.log(query)
    // this.filter = {season: [query]};
    this.testFilter(this.filter);
    // this.locations = this.locations.filter((i) => filterBy.includes(i.season));
    // this.filter = this.locations
  }

}
