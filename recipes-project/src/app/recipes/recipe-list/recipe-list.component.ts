import { Component } from '@angular/core';
import { RecipesComponent } from '../recipes.component';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipes: Recipe[]=[
    new Recipe(
      'Butter Chicken', 
      'A popular North Indian dish made with succulent chicken cooked in a rich and creamy tomato-based sauce.', 
      'https://www.simplyrecipes.com/thmb/-QzmQynep4nIQ3tncO0v3_xpPd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg'),

    new Recipe(
      'Biryani', 
      'A flavorful rice dish cooked with aromatic spices, basmati rice, and meat (such as chicken, mutton, or fish) or vegetables.', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKRICejHtoguZJ4nY8u7TTyJEm57HzDkpcQ&usqp=CAU'),

    new Recipe(
      'Masala Dosa', 
      'A thin and crispy South Indian crepe made from fermented rice and lentil batter, typically served with a spicy potato filling and chutneys.', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYmbq5bLQTrQkSHQVorNmFdJVHncZwni6ng&usqp=CAU'),

    new Recipe(
      'Paneer Tikka', 
      'A popular vegetarian appetizer made with marinated and grilled cubes of paneer (Indian cottage cheese) along with bell peppers, onions, and spices.', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF76gLb3m26PZje7jc52w4lKaYqS3PZMgXNA&usqp=CAU'),

  ];

  constructor(){
     
  }

}
