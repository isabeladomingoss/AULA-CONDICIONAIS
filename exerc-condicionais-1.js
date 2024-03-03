const valorDaCompra = 100;
const numeroDeParcelas = 4;

if (numeroDeParcelas === 1) {
    //a vista - com 10% de desconto
    console.log(`Você pagará R$${(valorDaCompra*0.9)} com 10% de desconto a vista`);
} else {
    //parcelado em 6x sem juros s/ desconto
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você pagará em ${numeroDeParcelas}X SEM JUROS de R$${valorDaParcela.toFixed([2])}`);
}