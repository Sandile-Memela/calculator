const add = function(a,b) {
    return parseFloat(a) + parseFloat(b);
};
  
const subtract = function(a,b) {
    return parseFloat(a) - parseFloat(b);
};
  
const divide = function(a,b) {
    return parseFloat(a) / parseFloat(b);
};
  
const multiply = function(a,b) {
    return parseFloat(a) * parseFloat(b);
};

function operate(option, a, b) {
    switch (option) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '+':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}