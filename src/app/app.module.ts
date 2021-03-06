import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './screens/home/home.component';
import { ContentComponent } from './screens/content/content.component';
import { BlogComponent } from './screens/blog/blog.component';
import { FaqsComponent } from './screens/faqs/faqs.component';
import { AboutComponent } from './screens/about/about.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {PrivacyComponent} from './screens/privacy/privacy.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppService} from './app.service';
import {ContentDetailComponent} from './screens/content-detail/content-detail.component';
import {BlogDetailComponent} from './screens/blog-detail/blog-detail.component';
import {CommonModule} from '@angular/common';
import {ContentLoaderModule} from '@ngneat/content-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    BlogComponent,
    FaqsComponent,
    AboutComponent,
    PrivacyComponent,
    ContentDetailComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    ContentLoaderModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
