let lista = JSON.parse(localStorage.getItem("listaCompras")) || [] //tenta buscar um texto salvo se não começa uma lista vazia

function mostrarLista(){
    const ul = document.getElementById("lista");
    ul.innerHTML = ""; //limpa a lista para não haver duplicações
    lista.forEach ((obj, index) => {
        const li = document.createElement("li")
        li.innerHTML = `
      <div>
        <strong>${obj.item}</strong>
        <div class="time">${obj.dataHora}</div>
      </div>
      <button class="remove" onclick="removerItem(${index})">X</button>
    `;
    ul.appendChild(li);
    })
  }
function adicionarItens(){
  const input = document.getElementById("itemInput")
  const valor = input.value.trim() //remove os espaços em branco
  if (valor === "") return;

  const agora = new Date(); //mostra a data e hora do momento
  const dataHora = agora.toLocaleString("pt-BR") //colocar data e hora com base no brasil

  lista.push({item: valor , dataHora: dataHora})
  localStorage.setItem("listaCompras", JSON.stringify(lista))
  input.value = ""
  mostrarLista()
}
function removerItem(index){
    lista.splice(index, 1)
    localStorage.setItem("listaCompras", JSON.stringify(lista))
    mostrarLista()
}
document.getElementById("itemInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarItens();
    }
});
mostrarLista()