// int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);

const returnSum = (index) => {
    let sum = 0;
    let k = 0;

    for (let i = 0; i < index; i++) {
        k = k + 1;
        sum = sum + k;
    }

    console.log("Soma:", sum);
    return;
}
