import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
    'This is a test',
    'https://www.polonist.com/wp-content/uploads/2018/09/Szarlotka-600px-sq-480x480.jpg',
    [
      new Ingredient('Meat', 1)
    ]),
    new Recipe('A test recipe2',
    'This is a test2',
    'https://www.polonist.com/wp-content/uploads/2018/09/Szarlotka-600px-sq-480x480.jpg',
    [
      new Ingredient('Chicken', 3)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes(){
    return this.recipes.slice(); //returns new (copied) array, not a reference!
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
