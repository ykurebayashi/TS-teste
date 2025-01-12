// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const calculateEarnings = (earnings) => {
    const daysWithEarning = earnings.filter((earning) => earning > 0);

    const leastEarning = Math.min(...daysWithEarning);

    const mostEarning = Math.max(...daysWithEarning);

    const average = daysWithEarning.reduce((acc, curr) => acc + curr) / daysWithEarning.length;

    const aboveAverage = daysWithEarning.filter((daysWithEarning) => daysWithEarning > average).length;

    return { leastEarning, mostEarning, average, aboveAverage };
}
