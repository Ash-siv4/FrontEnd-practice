'use strict'

const historyDiv = document.getElementById('historyDiv');

const buttons = document.querySelectorAll('button.btn-primary');

const addHistory = function (myString) {
    const newP = document.createElement('p');

    newP.innerText = myString;

    historyDiv.prepend(newP);
}


function changeCounter() {
    let initialValue = myCounter.value;
    myCounter.value = Number.parseInt(myCounter.value) + Number.parseInt(this.innerText);
    addHistory(initialValue + this.innerText + "=" + myCounter.value);
}


buttons.forEach(button => button.addEventListener('click', changeCounter));

// minusFive.addEventListener('click', changeCounter);

// minusOne.addEventListener('click', changeCounter);

resetButton.addEventListener('click', () => {
    historyDiv.innerText = '';
    myCounter.value = 0;
});

// plusOne.addEventListener('click', changeCounter);

// plusFive.addEventListener('click', changeCounter);