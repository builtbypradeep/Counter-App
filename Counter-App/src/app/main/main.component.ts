import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
// num : number = signal(0);

 num = signal(0);

Increment(){
this.num.update( x => x + 1 );
 }
Decrement(){
  if (this.num() > 0){
 this.num.update(x => x  - 1);
  }
 
}
Reset(){
  // this.num()  = 0;
  this.num.set(0);
}

}
