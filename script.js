document.querySelector('button').addEventListener('click', async (e) => {
    const query = document.querySelector('input').value;
    const appId = '3ce69532';
    const appKey = '18e7aef5c4b47b875b8ed3c8a6ba9eee';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
        const answer = await fetch(url);
        if (!answer.ok) {
            throw new Error('Ошибка сети');
        }
        const data = await answer.json();
        console.log(data);
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Ошибка:', error);
    }
});

function displayRecipes(recipes) {
    const contentDiv = document.getElementById('keywordContent');
    contentDiv.innerHTML = ''; 

    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;

        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.label}">
                <div class="recipe-info">
                <h2>${recipe.label}</h2>
                <p>Диета: ${recipe.dietLabels.join(', ') || 'Нет специальных диетических меток'}</p>
                <p>${recipe.healthLabels.join(', ') || 'Нет специальных меток здоровья'}</p>
                <p>Калории: ${Math.round(recipe.calories)} ккал</p>
                <p>Порции: ${recipe.yield}</p>
                <div class="nutrients">
                    <p><span style="color: green;">БЕЛКИ</span> ${Math.round(recipe.totalNutrients?.PROCNT?.quantity || 0)} г</p>
                    <p><span style="color: red;">ЖИРЫ</span> ${Math.round(recipe.totalNutrients?.FAT?.quantity || 0)} г</p>
                    <p><span style="color: orange;">УГЛЕВОДЫ</span> ${Math.round(recipe.totalNutrients?.CHOCDF?.quantity || 0)} г</p>
                </div>
                </div>
            </div>
        `;

        contentDiv.appendChild(recipeElement);
    });
}
