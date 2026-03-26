async function loadRecipes() {
    const res = await fetch('/recipes');
    const data = await res.json();

    const container = document.getElementById('recipes');
    container.innerHTML = '';

    data.forEach(r => {
        container.innerHTML += `
            <div class="recipe">
                <h3>${r.title}</h3>
                <p><b>Ingredients:</b> ${r.ingredients}</p>
                <p><b>Steps:</b> ${r.steps}</p>
            </div>
        `;
    });
}

async function addRecipe() {
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const steps = document.getElementById('steps').value;

    await fetch('/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, ingredients, steps })
    });

    loadRecipes();
}

loadRecipes();