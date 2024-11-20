import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/partial/index/index.component';
import { ExploreComponent } from './components/partial/explore/explore.component';
import { BookComponent } from './components/partial/book/book.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'explore', component: ExploreComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'explore/:bookid', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
