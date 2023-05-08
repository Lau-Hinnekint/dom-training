
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];

function createListIngredients(arr) {

    ingredients.forEach(function (ingredient) {                             //Je lance une boucle sur chaque ingrédient de la liste

        if (ingredient.length === 0) return;                                //J'intterompt la fonction si la liste est vide

        const li = document.createElement('li');                            // J'initialise une variable qui crée un élément LI
        li.classList.add('flex-list-li');                                   // Je rajoute la classe "flex-list-li" à cet élément
        document.getElementById('salad-ingredients').appendChild(li);       // Je transfert l'élément crée dans la nouvelle liste

        const button = document.createElement('button');                    // J'initialise une variable qui crée un élément BUTTON
        button.classList.add('flex-list-btn');                              // Je rajoute la classe "flex-list-bt" à cet élément
        button.innerText += ingredient;                                     // Je copie le contenu de la liste d'ingrédients dans l'élément BUTTON
        li.appendChild(button);                                             // Je transfert l'élément crée dans la nouvelle liste
    })
}



createListIngredients(ingredients);



function addIngredientToSalad() {
    if (saladFinal.childElementCount >= 5) return;

    const li = document.createElement('li');
    li.classList.add('flex-list-li');
    saladFinal.appendChild(li);

    const button = document.createElement('button');
    button.classList.add('flex-list-btn');
    button.innerText += this.innerText;
    li.appendChild(button);
    countIngredients;
}

function countIngredients() {
    document.getElementById("salad-count").innerText = saladFinal.childElementCount;
}


function removeIngredientFromSalad(event) {
    event.target.remove()
}




const buttonSaladIng = document.querySelectorAll('#salad-ingredients .flex-list-btn');
buttonSaladIng.forEach(function (button) {
    button.addEventListener('click', addIngredientToSalad);
});



const buttonSaladFinal = document.querySelectorAll('#salad-final .flex-list-btn');
console.log(buttonSaladFinal);
buttonSaladFinal.forEach(function (button) {
    button.addEventListener('click', removeIngredientFromSalad);
    countIngredients();
});



const saladFinal = document.getElementById("salad-final");
const saladIng = document.getElementById("salad-ingredients")




