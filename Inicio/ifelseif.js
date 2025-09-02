Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}
const  imprimirnota = function (nota) {
    if (nota.entre  (9, 10)) {
        console.log("Aprovado")
    }
    else if (nota.entre(6, 8)) {
        console.log("Boa fera")
    }
    else if (nota.entre(3, 5)) {
        console.log("Recuperação")
    }
    else {
        console.log("Reprovado!")
    }
}
imprimirnota(8)
imprimirnota(3)