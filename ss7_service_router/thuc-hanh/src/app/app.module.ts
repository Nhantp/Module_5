import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {YoutubePlaylistComponent} from './song/youtube-playlist/youtube-playlist.component';
import {YoutuberPlayerComponent} from './song/youtuber-player/youtuber-player.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductListComponent,
    YoutubePlaylistComponent,
    YoutuberPlayerComponent,
    ProductDetailComponent,
    DeleteProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
