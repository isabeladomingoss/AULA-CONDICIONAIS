const valorDoProduto = 100;
const juros = 0.01;
const numeroDeParcelas = 10;


if (numeroDeParcelas === 1) {
    //a vista - com 10% de desconto
    console.log(`Você pagará R$${(valorDoProduto*0.9)} com 10% de desconto a vista`);
} else if (numeroDeParcelas > 1 && numeroDeParcelas <= 6) {
        //parcelado em 6x sem juros s/ desconto
    const valorDaParcela = valorDoProduto / numeroDeParcelas;
    console.log(`Você pagará em ${numeroDeParcelas}X SEM JUROS de R$${valorDaParcela.toFixed([2])}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcelado com juros
 const valorComJuros = valorDoProduto * (1 + 1/100) ** numeroDeParcelas;
 const valorDaParcelaComJuros = valorComJuros / numeroDeParcelas;
 console.log(`Você pagará em ${numeroDeParcelas} com Juros de R$${valorDaParcelaComJuros.toFixed([2])}`);
} else {
    console.log(`Número de parcelas inválido!`);
}