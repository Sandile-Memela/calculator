// operation variables.
let aValue = '0';
let bValue = '0';
let option = '';
let answer = 0;
let position = 'a';

// return the sum of a,b.
const add = function(a,b) {
    return parseFloat(a) + parseFloat(b);
};
  
// return the subtraction of a,b.
const subtract = function(a,b) {
    return parseFloat(a) - parseFloat(b);
};
  
// return the division of a,b.
const divide = function(a,b) {
    return parseFloat(a) / parseFloat(b);
};

// return the product of a,b.
const multiply = function(a,b) {
    return parseFloat(a) * parseFloat(b);
};

// select function given option and a and b.
function operate(option, a, b) {
    switch (option) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

// update the display.
function display(value) {
    const screen = document.querySelector('#screen');
    screen.textContent = value;
}

// flip position.
function flipPosition(opt) {
    if (position === 'a') position = 'b';
    else if (position === 'b') position = 'a';
    option = opt;
}

// store the value.
function storeValue(value) {
    if (position === 'a') {
        if (aValue === '0') aValue = value;
        else aValue += value;
    } else if (position === 'b') {
        if (bValue === '0') bValue = value;
        else bValue += value;
    }
}

// get the value.
function getValue() {
    return position === 'a' ? aValue : bValue;
}

// function clear the value.
function clear(ans) {
    answer = ans ? 0 : answer;
    position = 'a';
    aValue = '0';
    bValue = '0';
    option = '';
}

// add event listeners to buttons.
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => { 
    display('');
    clear(true);
});
const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => { 
    if (option === '/' && parseFloat(bValue) === 0) display("Can't Divide Geez!");
    else if (option !== '') {
        answer = operate(option, aValue, bValue);
        display(answer); 
        clear(true);
    }
});
const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => { 
    if (option !== '') {
        answer = operate(option, aValue, bValue);
        clear(false);
        storeValue(`${answer}`);
        flipPosition('+');
        display(answer);
    } else {
        flipPosition('+');
        display('+'); 
    }
});
const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
    if (option !== '') {
        answer = operate(option, aValue, bValue);
        clear(false);
        storeValue(`${answer}`);
        flipPosition('-');
        display(answer);
    } else {
        flipPosition('-');
        display('-'); 
    }
});
const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => { 
    if (option !== '') {
        answer = operate(option, aValue, bValue);
        clear(false);
        storeValue(`${answer}`);
        flipPosition('*');
        display(answer);        
    } else {    
        flipPosition('*');
        display('*');
    }
});
const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => { 
    if (option === '/' && parseFloat(bValue) === 0) display("Can't Divide Geez!");
    else if (option !== '') {
        answer = operate(option, aValue, bValue);
        clear(false);
        storeValue(`${answer}`);
        flipPosition('/');
        display(answer);
    } else {
        flipPosition('/');
        display('/');
    }
});
const btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => { 
    storeValue('1');   
    display(getValue()); 
});
const btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => { 
    storeValue('2');    
    display(getValue());
});
const btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => { 
    storeValue('3');    
    display(getValue()); 
});
const btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => {
    storeValue('4');    
    display(getValue()); 
});
const btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => { 
    storeValue('5');    
    display(getValue()); 
});
const btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => { 
    storeValue('6');    
    display(getValue()); 
});
const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => { 
    storeValue('7');    
    display(getValue());
});
const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => { 
    storeValue('8');    
    display(getValue()); 
});
const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => { 
    storeValue('9');    
    display(getValue()); 
});
const btn0 = document.querySelector('#zero');
btn0.addEventListener('click', () => { 
    storeValue('0');    
    display(getValue()); 
});