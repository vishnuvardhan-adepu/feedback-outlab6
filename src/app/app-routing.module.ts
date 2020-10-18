import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formcomponent } from './form/form.component';
import { contactpagecomponent } from './contact-page/contact-page.component';

const routes: Routes = [
    { path: 'form', component: formcomponent },
    { path: 'contact-page', component: contactpagecomponent },
    { path: '', redirectTo: '/contact-page', pathMatch: 'full' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }