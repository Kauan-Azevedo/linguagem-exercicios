class Form {
    constructor(formDOM) {
        this.formDOM = formDOM;
    }

    validateForm(input) {
        if (input.value === "") {
            throw new Error("Preencha todos os campos!");
        }
    }

    getData() {
        const formInputs = document.querySelectorAll(`${this.formDOM} input`);
        const inputsData = {};

        formInputs.forEach(input => {
            this.validateForm(input);
            inputsData[input.name] = input.value;
        });

        console.log(inputsData);
        return inputsData;
    }
}

export default Form;