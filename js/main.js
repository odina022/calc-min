const numbers = document.querySelectorAll('.num')
const signs = document.querySelectorAll('.sign')
const dot = document.querySelector('.dot')
const equal = document.querySelector('.equal')
const clearButton = document.querySelector('.c')
const removeButton = document.querySelector('.r')

const display = document.querySelector('input')

class Calculator {
    display
    signView
    signOperator
    operators = ['+','✕','÷','-']
    isDot = false
    setDisplay(value) {
        display.value = display.value + value
    }

    get lastValue() {
        return display.value[display.value.length - 1]

    }

    get firstValue() {
        return display.value[0]
    }

    numbers(event) {
        const num = event.target.textContent.trim();


        if (
            this.lastValue == 0 && display.value.length == 1
        ) return display.value = num

        if (
            this.lastValue == 0 && this.signView
        ) return display.value = display.value.slice(0, -1) + num;

        this.setDisplay(num)
       
    }
    signs(event) {
        const signView = event.target.textContent.trim();
        const signOperator = event.target.dataset.sign

        if(
            this.operators.includes()
        )



        if (
            !display.value ||
            this.operators.includes(this.lastValue) ||
            this.lastValue == "."
        ) return


            this.signView = signView
        this.signOperator = signOperator
        this.setDisplay(signView)

     

    }
    dot() {

        if(
           !display.value ||
           this.operators.includes(this.lastValue)
        ) {
            display.value = display.value + "0."
            return this.isDot = true
        }



    if(
        !display.value ||
        this.lastValue == "." ||
        this.operators.includes(this.lastValue)

    ) {
        return this.isDot = true
    }

        this.setDisplay('.')
        

    }
    calculate() {
       const [num1,num2] = display.value.split(this.signView)
       display.value = eval(num1 + this.signOperator + num2)

    }
    clear() {
        display.value = null

    }
    remove() {
        let deleted = display.value.split('')
        let newValue = display.value.split('').slice(0, -1).join('');

        display.value = newValue

    }
}

let calculator = new Calculator();

for (const number of numbers) {
    number.onclick = (event) => {
        return calculator.numbers(event)
    }
}
for (const sign of signs) {
    sign.onclick = (event) => {
        return calculator.signs(event)
    }
}
dot.onclick = () => {
    calculator.dot();
}
clearButton.onclick = () => {
    calculator.clear()
}
removeButton.addEventListener('click', function () {
    calculator.remove();
})
equal.addEventListener('click',function () {
  calculator.calculate()
})