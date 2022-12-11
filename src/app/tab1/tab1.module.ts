import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {SanitizeHtmlPipe} from '../pipes/sanitizeHtml.pipe';
import {FilterLocationsPipe} from '../pipes/filter-locations.pipe';
import {LoadingModule} from '../loading/loading.module';

import { FilterComponent } from '../filter/filter.component';
import {FilterPipe} from '../pipes/filter.pipe';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    LoadingModule
  ],
  declarations: [
    Tab1Page,
    SanitizeHtmlPipe,
    FilterLocationsPipe,
    FilterComponent,
    FilterPipe
  ]
})
export class Tab1PageModule {
}
