const ingredientsList = document.getElementById('recipe-ingredients');
const instructionsList = document.getElementById('recipe-instructions');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

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
    const instructions = instructionsList.getEelementsByTagName('li');

    if (index < instructions.length) {
        instructions[index].classList.remove('is-done');
    }
}


const element = document.querySelectorAll(".headers")[0];
element.addEventListener('click', () => {
    console.log(element);
    element.className = 'animate__animated animate__bounce';
});

const element1 = document.querySelectorAll(".headers")[1];
element1.addEventListener('click', () => {
    console.log(element);
    element1.className = 'animate__animated animate__bounce';
});

const cake = document.querySelector("#cake");
cake.addEventListener('click', () => {
    console.log(element);
    cake.className = 'animate__animated animate__bounce';
});