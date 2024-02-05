import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name : string = 'Jared';
  lastname : string = 'Trujillo';
  age : number = 20;
  favoriteFood : string[] = ['pizza', 'tacos', 'burgers']
  switch : boolean = false;

  changeValues() : void {
    this.name = 'Alexander';
    this.lastname = 'Ortiz';
    this.age = 21;
    this.switch = true;
  }

}
