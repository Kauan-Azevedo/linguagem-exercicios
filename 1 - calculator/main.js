const calculator_Input = document.querySelector('.calculator-display__input');

const calculator_Buttons = document.querySelectorAll('.calculator-keys__key');

calculator_Buttons.forEach(button => {
  button.addEventListener('click', () => {
    previous_calculation = "";
    switch (button.textContent) {
        case('C'):
            calculator_Input.value = '';
            break;
        case('='):
            calculator_Input.value =
                eval(calculator_Input.value);
                previous_calculation = calculator_Input.value;
                console.log(previous_calculation)
            break;
        case('+'):
            calculator_Input.value += '+';
            break;
        default:
            calculator_Input.value += button.textContent;
            break;
    }
  });
});