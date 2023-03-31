import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() recipeShow = new EventEmitter<boolean>();

  recipesClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    this.recipeShow.emit(true);
  }
}
