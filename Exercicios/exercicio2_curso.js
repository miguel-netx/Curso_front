function operacoesMath (a, b) {
    console.log(`sua soma é igual a: ${a + b}`,
        `\nsua multiplicação  é igual a: ${a * b}`,
        `\nsua subtração é igual a: ${a - b}`,
        `\nsua divisão é igual a: ${a / b}`);
}
operacoesMath(2, 4)

function triangulo (v1, v2, v3) {
    if (v1 === v2 && v2 === v3){
        console.log("É um trinagulo Equilatero.");
    }
    else if (v1 === v2 && v2 != v3){
        console.log("É um trinagulo Isósceles");
    }
    else if (v1 != v2 && v2 != v3){
        console.log("É um trinagulo Escaléno");
    }else {
        console.log("Não é um trinagulo")
    }
}
triangulo(2,3,6)

function baseExpo (a, b){
    console.log(a ** b)
}
baseExpo(2,3)