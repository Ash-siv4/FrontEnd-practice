'use strict';

onClickButton.onclick = function() {
    alert('henlo from index.js');
}

onClickButton.onclick = function() {
    alert('F\'s in the chat');
}

onClickEventHandler.addEventListener('click', function() {
    alert('yo, this is an event listener!');
});

onClickEventHandler.addEventListener('click', function() {
    // this -> current context (button in this case)
    console.log(this.innerText);
});

onClickEventHandler.addEventListener('click', () => {
    // this -> never has context in an arrow function
    console.log("Arrow func: ", this);
});

copyButton.addEventListener('click', function() {
    myInputCopy.value = myInput.value;  
});

myInput.addEventListener('input', function(event) {
    console.log('Current element: ', this);
    console.log('Event that triggered the listener:', event);
    myInputCopyType.value = this.value;
});