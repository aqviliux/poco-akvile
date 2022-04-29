// Create an object to hold information on your favorite recipe.
//  It should have properties for title (a string), servings (a number),
//   and ingredients (an array of strings).
// On separate lines (one console.log statement for each),
//  log the recipe information so it looks like:
// Soup
// Serves: 2
// Ingredients: cinnamon, cumin, cocoa

// function recipe(title, servings, ingredients) {
//     this.title = title,
//     this.servings = servings,
//     this.ingredients
// }

const recipe = {
    title: "cake",
    serves: 4,
    ingredients: ["cinnamon", "apple", "milk"],
};

console.log(recipe.title);
console.log(`Serves: ${recipe.serves}`);
console.log(`Ingredients: ${recipe.ingredients}`);
