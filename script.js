const ingredientsList = document.getElementById('recipe-ingredients');
const instructionsList = document.getElementById('recipe-instructions');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const ingredientsHeader = document.getElementById('ingredients-header');
const instructionsHeader = document.getElementById('instructions-header');
const cake = document.getElementById('cake');


function highlightIngredients() {
    const ingredients = ingredientsList.getElementsByTagName('li');
    for (let i = 0; i < ingredients.length; i++) {
        if (i % 2 === 0) {
            ingredients[i].classList.toggle('highlight');
        }
    }
}

function checkInstructions() {
    const instructions = instructionsList.getElementsByTagName('li');
    let index = 0;

    const interval = setInterval(() => {
        if (index < instructions.length) {
            instructions[index].classList.add('is-done');
            index++;
        } else {
            clearInterval(interval);
        }
    }, 3000);
}

function resetInstructions() {
    const instructions = instructionsList.getElementsByTagName('li');
    for (let i = 0; i < instructions.length; i++) {
        instructions[i].classList.remove('is-done');
    }
}


ingredientsHeader.addEventListener('click', () => {
    ingredientsHeader.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        ingredientsHeader.classList.remove('animate__animated', 'animate__bounce');
    }, 1000); 
});

instructionsHeader.addEventListener('click', () => {
    instructionsHeader.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        instructionsHeader.classList.remove('animate__animated', 'animate__bounce');
    }, 1000); 
});

cake.addEventListener('click', () => {
    cake.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        cake.classList.remove('animate__animated', 'animate__bounce');
    }, 1000); 
});