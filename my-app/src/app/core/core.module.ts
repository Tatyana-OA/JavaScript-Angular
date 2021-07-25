import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
	//all that can be used in template
  declarations: [
    FooterComponent,
	HeaderComponent,
	AsideComponent
  ],
  imports: [
    CommonModule,
	HttpClientModule
  ],
  // will be used in the app module (imported there)
  exports: [
	HeaderComponent,
	FooterComponent,
	AsideComponent
  ]
})
export class CoreModule { }
