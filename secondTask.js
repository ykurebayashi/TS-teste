// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const isFibonacci = (num) => {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return console.log("O número pertence a Fibonacci.");
    }

    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return console.log("O número pertence a Fibonacci.");
        }
        a = b;
        b = next;
        next = a + b;
    }
    return console.log("O número não pertence a Fibonacci.");
};


