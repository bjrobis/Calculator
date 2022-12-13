//Select all buttons
let textBox = document.getElementById('output');
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let resetButton = document.querySelector(".clear");
let equalsButton = document.querySelector('.equals');

//Set inital textbox display value
textBox.value;
let counter = '';

//Add event listeners to each button
resetButton.addEventListener('click', () => {
    textBox.value = '';
    counter = '';
    console.log("Display reset");
});

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.name);
        textBox.value += e.target.name;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        textBox.value += e.target.name;
        counter += textBox.value;
        textBox.value = '';
    });
});

equalsButton.addEventListener('click', (e) => {
    counter += textBox.value;
    textBox.value = math.evaluate(counter);

});



