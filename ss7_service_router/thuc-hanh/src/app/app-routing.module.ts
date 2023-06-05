import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {YoutubePlaylistComponent} from './product/song/youtube-playlist/youtube-playlist.component';
import {YoutuberPlayerComponent} from './product/song/youtuber-player/youtuber-player.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
}, {
  path: 'product/:id',
  component: ProductDetailComponent

}
];

// const routes: Routes = [
//   {
//     path: 'youtube',
//     component: YoutubePlaylistComponent,
//     children: [{
//       path: ':id',
//       component: YoutuberPlayerComponent
//     }]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
