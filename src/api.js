import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't be any API-aware stuff elsewhere in the frontend.
 *
 */

class KitchenApi {
   // the token for interactive with the API will be stored here.
   static token;  // global set on line 34 App.js

   static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);

      //there are multiple ways to pass an authorization token, this is how you pass it in the header.
      //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
      const url = `${BASE_URL}/${endpoint}`;
      const headers = { Authorization: `Bearer ${KitchenApi.token}` };
      const params = (method === "get")
         ? data
         : {};

      try {
         return (await axios({ url, method, data, params, headers })).data;
      } catch (err) {
         console.error("API Error:", err.response);
         let message = err.response.data.error.message;
         throw Array.isArray(message) ? message : [message];
      }
   };

   // Individual API routes
   // -----------------------------------------Recipes 
   /** Create a new recipe */
   static async createRecipe(recipeData) {
      let res = await this.request(`recipes/add`, recipeData, "post")
      return res.recipe;
   }

   /** Get all recipes; filter: cuisine */
   static async getAllRecipes(cuisine, title, ingredients) {
      let res = await this.request("recipes", { cuisine, title, ingredients });
      return res.recipes;
   }

   /** Get details on a recipe by handle. */
   static async getRecipe(id) {
      let res = await this.request(`recipes/${id}`)
      return res.recipe;
   }

   /** Log recipe to daily calories */
   static async logRecipe(data) {
      let res = await this.request(`calLogs/log`, data);
      return res.log;
   }

   /** Update recipe; 
    * need to check currentUser.username === recipe.username
   */
   static async updateRecipe(id, data) {
      let res = await this.request(`recipes/${id}`, data, "patch")
      return res.recipe;
   }

   /** Delete recipe 
    * need to check currentUser.username === recipe.username
   */
   static async deleteRecipe(id) {
      await this.request(`recipes/${id}`, "delete")
   }

   // -----------------------------------------Users
   /** Get current user */
   static async getCurrentUser(username) {
      let res = await this.request(`users/${username}`)
      return res.user;
   }

   /** Signup user */
   static async signup(userData) {
      let res = await this.request(`auth/register`, userData, "post")
      return res.token;
   }

   /** Login user and store token on class and return token  */
   static async login(userData) {
      let res = await this.request(`auth/token`, userData, "post")
      return res.token;
   }

   /** Get all users */
   static async getAllUsers() {
      let res = await this.request(`users`);
      return res.users;
   }

   /** Get user by id 
    * Returns :
    *  - user's personal infor
    *  - lists users recipes
   */
   static async getUser(username) {
      let res = await this.request(`users/${username}`)
      return res.user;
   }

   /** Save/update user information */
   static async updateProfile(username, data) {
      let res = await this.request(`users/${username}`, data, "patch")
      return res.user;
   }

   /** Delete user */
   static async deleteProfile(username) {
      let res = await this.request(`users/${username}`, "post")
      return res.username;
   }

   // -----------------------------------------Favorites
   /** Get all favorites of currentUser */
   static async getAllFavorites(username) {
      let res = await this.request(`users/${username}/favorites`)
      return res.favorites;
   }

   /** Save/Favorite a recipe 
    * need to pass in username to db
   */
   static async favoriteRecipe(id, username) {
      let res = await this.request(`favorites/${id}`, username, "post")
      return res.favorite;
   }

   /** Unsave/Remove favorited recipe 
    * verify currentUser.username === recipe.username
   */
   static async removeFavoriteRecipe(id) {
      let res = await this.request(`favorites/${id}`, "post")
      return res.id;
   }


   // -----------------------------------------Variations
   /** Get recipe variations byCuisine */
   static async varByCuisine(id) {
      let res = await this.request(`variations/bycuisine/${id}`);
      return res.variations;
   }

   /** Get recipe variations byIngredients */
   static async varByIngredients(id) {
      let res = await this.request(`variations/byingredients/${id}`);
      return res.variations;
   }

   /** Get variation recipe 
    * accepts variation ID from 
    *    - bycuisine or
    *    - byingredients
   */
   static async getVarRecipe(varId) {
      let res = await this.request(`variations/recipe/${varId}`);
      return res.recipe;
   }

   /** Favorite Variation Recipe */
   static async favoriteVarRecipe(data) {
      let res = await this.request(`variations/favorite`, data, "post");
      return res.favorite;
   }

   /** Log Variation Recipe to daily calories */
   static async logVarRecipe(data) {
      let res = await this.request(`variations/log`, data, "post");
      return res.log;
   }
};

export default KitchenApi;