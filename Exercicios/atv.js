function saudacao(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`)
}
saudacao("Miguel", 10)


function operacoesMath (a, b) {
    console.log(`sua soma é igual a: ${a + b}`);
    console.log(`sua multiplicação  é igual a: ${a * b}`);
    console.log(`sua subtração é igual a: ${a - b}`);
    console.log(`sua divisão é igual a: ${a / b}`);
}
operacoesMath(2, 4)


function abilitado (idade){
    if (idade > 17)
        console.log("Você é maior de idade");
    else if (idade <= 17)
        console.log("Você não é maior de idade");
}

abilitado(17)
abilitado(1)

for (let i =1; i < 101; i++)
    console.log(i);


function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(5, 3));


let frutas = ["uva", "banana", "maça", "abacaxi"]
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);    
}


let livro = {
    titulo : "O Isaque é Gay: Uma História de Respeito",
    autor : "Miguel o Foda",
    numPaginas : 50
}

console.log(livro.titulo)