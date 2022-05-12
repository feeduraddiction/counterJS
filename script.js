function createButton(parent, type) {
    const button = document.createElement('button');
    button.className = type;
    button.innerHTML = type === 'increment' ? '+' : '-';
    parent.appendChild(button);
}

function createCounterText(parent) {
    const text = document.createElement('p');
    parent.appendChild(text);
}

function createCounterDiv() {

    const uniqueKey = document.querySelectorAll('.counter').length;

    const counterDiv = document.createElement('div');
    counterDiv.className = `counter c${uniqueKey}`;
    const main = document.querySelector('#main');
    main.appendChild(counterDiv);

    createButton(counterDiv, 'decrement');
    createCounterText(counterDiv);
    createButton(counterDiv, 'increment');

    return uniqueKey;
}

function createCounter(initialValue = 0, minValue = -999, maxValue = 999) {
    const uniqueKey = createCounterDiv();
    const incrementButton = document.querySelector(`.c${uniqueKey} .increment`);
    const decrementButton = document.querySelector(`.c${uniqueKey} .decrement`);

    const counterObject = {
        counter: initialValue,
        decrement() {
            incrementButton.disabled = false;
            this.counter--;
            text.innerHTML = `${this.counter}`;
            decrementButton.disabled = this.counter <= minValue;
        },
        increment() {
            decrementButton.disabled = false;
            this.counter++;
            text.innerHTML = `${this.counter}`;
            incrementButton.disabled = this.counter >= maxValue;
        }
    }

    const text = document.querySelector(`.c${uniqueKey} p`);
    text.innerHTML = `${counterObject.counter}`;

    incrementButton.addEventListener('click', () => counterObject.increment())
    decrementButton.addEventListener('click', () => counterObject.decrement())

    return counterObject;
}


const counter_1 = createCounter();
const counter_2 = createCounter(4, 5, 15);
console.log(counter_1.counter);
counter_1.decrement();
console.log(counter_1.counter);
counter_1.increment();

