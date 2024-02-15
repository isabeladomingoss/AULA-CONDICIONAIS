const idade = 69;

// menor de 18 -> menor de idade
// maior de idade, mas menor ou igual a 65 -> adulto
// acima de 65 -> idoso

if ( idade < 18){
    console.log("Menor de idade");
} else if(idade <= 65){ //apagar uma {} para que não fique tão extenso
    console.log("Adulta");
} else {
    console.log("Idosa");
}
