import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path:'', redirectTo: 'input', pathMatch: 'full'},
  {path: 'input', component:InputComponent}
  ,{path: 'input/display', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
