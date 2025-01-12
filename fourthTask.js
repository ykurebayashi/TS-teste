// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

const calculatePercent = (earningsPerState) => {
    const totalEarned = Object.values(earningsPerState).reduce((acc, curr) => acc + curr, 0);

    const result = [];

    for (let state in earningsPerState) {
        const value = earningsPerState[state];
        const percentage = ((value / totalEarned) * 100).toFixed(2) + "%";
        result.push({ state, percentage });
    }

    return result;
}
