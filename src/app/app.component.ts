import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RecipesApp';
  clickedButton = false;

  receiveBoolean(isRecipesClicked: boolean) {
    this.clickedButton = isRecipesClicked;
    console.log(this.clickedButton);
  }
}
