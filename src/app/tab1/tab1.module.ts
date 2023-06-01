import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {SanitizeHtmlPipe} from '../pipes/sanitizeHtml.pipe';
import {FilterLocationsPipe} from '../pipes/filter-locations.pipe';
import {LoadingModule} from '../loading/loading.module';

import {FilterPipe} from '../pipes/filter.pipe';
import {FilterModule} from '../filter/filter.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        LoadingModule,
        FilterModule,
        NgOptimizedImage
    ],
  declarations: [
    Tab1Page,
    SanitizeHtmlPipe,
    FilterLocationsPipe,
    FilterPipe
  ]
})
export class Tab1PageModule {
}
