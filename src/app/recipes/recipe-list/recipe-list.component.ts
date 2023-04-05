import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Focaccia',
      'Focaccia is a test description',
      'https://www.giallozafferano.it/images/238-23888/Focaccia-barese_450x300.jpg'
    ),
    new Recipe(
      'Hamburger di Ceci',
      'This is a test description',
      'https://www.giallozafferano.it/images/211-21178/Hamburger-di-ceci_450x300.jpg'
    ),
    new Recipe(
      'Tramezzino',
      'This is a test description',
      'https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/02/Tramezzini-ricetta-2039.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
