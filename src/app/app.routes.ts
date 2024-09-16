import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';  // ajuste o caminho conforme necessário
import { HomeComponent } from './Pages/home/home.component';
import { StoreComponent } from './Pages/store/store.component';  
import { AboutComponent } from './Pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,  // Este será o layout principal
    children: [
      { path: '', component: HomeComponent },
      { path: 'store', component: StoreComponent },
      { path: 'about', component: AboutComponent },
      // adicione mais rotas aqui
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
