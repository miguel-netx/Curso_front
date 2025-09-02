function compras(trabalho1, trabalho2) {
    const comprartv50p = trabalho1 || trabalho2;
    const comprartv32p = trabalho1 && trabalho2;
    const comprarSorvete = trabalho1 != trabalho2;
    const ficarSaudavel = !comprarSorvete

    return{comprartv50p, comprartv32p, comprarSorvete, ficarSaudavel}
}

console.log(compras(true, true));