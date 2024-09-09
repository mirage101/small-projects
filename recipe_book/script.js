const API_KEY = "69dbe7b95d1b446b98211cf5380072a5";
const recipeListEl = document.getElementById("recipe-list");
function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeEl = document.createElement("li");
    recipeEl.classList.add("recipe-item");
    recipeEl.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p><strong>Ingredients:</strong> ${recipe.extendedIngredients.map((i) => i.original).join(", ")}</p>
        <a href="${recipe.sourceUrl}">View Recipe</a>
        `;
    recipeListEl.appendChild(recipeEl);
  });
}
async function getRecipies() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipies = await getRecipies();
  displayRecipes(recipies);
  console.log(recipies);
}

init();
