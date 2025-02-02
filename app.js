let amigos = []; // Lista para armazenar os amigos

// Função para atualizar a lista na tela
function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista

  let i = 0;
  while (i < amigos.length) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>"; // Adiciona cada amigo à lista
    i++; // Incrementa o contador
  }
}

// Função para adicionar um amigo
function adicionarAmigo() {
  let campo = document.getElementById("amigo");
  let nome = campo.value.trim(); // Remove espaços extras

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome); // Adiciona o nome ao array
  atualizarLista(); // Atualiza a lista exibida
  campo.value = ""; // Limpa o campo de entrada
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indiceSorteado]; // Escolhe um nome aleatório

  // Limpa a lista de amigos antes de exibir o sorteado
  document.getElementById("listaAmigos").innerHTML = "";

  // Exibe o resultado formatado
  document.getElementById(
    "resultado"
  ).innerHTML = `<li><strong>O amigo secreto sorteado é:</strong> ${sorteado} 🎉</li>`;
}
