const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

// Search for meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // clear single meal
  single_mealEl.innerHTML = "";

  //  Get the serach term
  const term = search.value;

  //  Check for Empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search result for '${term}':`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search result. Try Again!</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
         <div class="meal">
         <img src="${meal.strMealThumb}"  alt="${meal.strMeal}" />
         <div class="meal-info" data-mealID="${meal.idMeal}">
         <h3>${meal.strMeal}</div>
         </div>
         `
            )
            .join("");
        }
      });

    //   Clear search
    search.value = "";
  } else {
    alert("Please enter a search term");
  }
}

// Event listeners
submit.addEventListener("submit", searchMeal);
