import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class FeatureModule {}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
myImage:string="assets/image/danyal.jpg";


}
