import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.polonist.com/wp-content/uploads/2018/09/Szarlotka-600px-sq-480x480.jpg'),
    new Recipe('A test recipe2', 'This is a test2', 'https://www.polonist.com/wp-content/uploads/2018/09/Szarlotka-600px-sq-480x480.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
