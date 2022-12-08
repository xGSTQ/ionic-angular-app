import {Component, ViewChild , OnInit} from '@angular/core';
import { IonContent } from '@ionic/angular';

import {LOCATIONS} from '../../assets/locations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  locations = LOCATIONS;
  searchText = '';
  isLoading = true;

  // public data = this.locations = this.locations.filter(key => key?.name.toLowerCase());


  constructor() {
  }

  ngOnInit() {
    this.isLoading = true;

    setTimeout (() => {
      this.isLoading = false;
    }, 3000);

    // this.locationsByName()
    // console.log(this.newTest);
  }



  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

  // newTest = [];
  // Iterate through the locations object by name
  // locationsByName(): void {
  //   let i = 0;
  //   while (i < this.locations.length) {
  //     this.newTest.push(this.locations[i].name.toLowerCase());
  //     i++;
  //   }
  // }


  // filterByName(name: any): void {
  //   this.locations = LOCATIONS;
  //   const filterBy = name;
  //   this.locations = this.locations.filter((i) => filterBy.includes(i.name));
  //   // this.searchText = county
  // }

}


