# My Kitchen

https://kitchen-capstone.onrender.com

### Description
   - Create, Search, Favorite, and Log daily calories of all your favorite meals! Users may have already have certain ingredients at home and need a recipe to use them up before they go bad. The app can search by cuisine or by ingredients to find alternative recipes (Spoonacular API) and will return recipes based on what they submitted and provide a list of ingredients they may still need to buy.  
   - Users can also keep track of their daily calorie intake but logging the recipes they eat throughout the day. The app will also determine their optimum calorie intake based on their BMI and their goals to either lose, maintain, or gain weight.

### Features
   - User must be logged in and registered to view features because the app needs to calculate the user's daily calorie intake prior to logging any recipes.
   - Registration will calculate how many calories the user should be consuming daily based on their personal metrics and fitness goals, which include:
      - age
      - weight
      - height
      - gender
      - physical activity level
      - goal (lose, gain, maintain)
   - View list of all recipes saved on _My Kitchen_.
   - View recipe details, including: cuisine, ingredients, instructions, & average calories. 
   - Search list of recipes by cuisine, title, or ingredients.
   - Create recipes.
   - Favorite/unfavorite recipes.
   - Log a recipe:
      - keeps track of the user's total calorie intake for the day.
      - reminds user if they have achieved their daily calorie intake for the day.
   - Find varaiations of recipes by similar cuisine or ingredients.
   - View/edit their profile.
### User Demographics:
   - The user demographic will be anyone that enjoys cooking and does not like to let groceries go to waste.
### Data:
   - Spoonacular API: https://spoonacular.com/food-api
   - The app will use the Spoonacular API, which will allow users to search recipes by ingredients or by cuisine.

### Database Schema:
   - Users: username, password, first name, last name, email, age, weight, height, gender, physical activity level, weight goals.
   - Recipes: title, cuisine, ingredients, instructions, avg calories, notes.
   - Favorites: title, recipeId
   <img src="DataSchema.jpeg" width="700" alt="Data-Schema">

### User Flow: 
   - Login/register.
   - Search through all recipes by cuisine, title, or ingredients.
   - Favorite recipes that you like and you can find them later in your list of favorites.
   - If you find a recipe but want something similar to it, within that recipe's details click on `Find Simlar Recipes` to view a list of variations based on similar cuisine or similar ingredients.
   - Have a recipe you frequently make and want to share? Create a recipe!
   - Log recipes to keep track of your daily calorie intake. Based on your calculated BMI and weight goal you set during registration, the app will tell you whether or not you have met your minimum calories for the day!
   - Update your fitness goals by updating your profile.

### Deployment
Frontend and Backend deployed on Render.

Database uses ElephantSQL.

Back end code available [here](https://github.com/vrbrag/Capstone2-backend).

### Test
 run `jest`
### Tech Stack
   Front-End: HTML5 | CSS3 | JavaScript | React | React Bootstrap | React-Router | JSON Web Token

   Back-End: Node.js | PostgreSQL | Express.js | JSON Schema | Axios | JWT Authentication | Bcrypt | RESTful APIs | Jest
