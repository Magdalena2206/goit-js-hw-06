const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = documet.querySelector("#ingredients");
const itemEl = [];

ingredients.map(ingredient => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    itemEl.push(element);
})