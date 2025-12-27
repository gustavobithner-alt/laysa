// Array com frases românticas
const frases = [
  "Estar ao seu lado transforma qualquer dia comum em algo inesquecível, e cada instante contigo vale mais do que mil lembranças.",
  "Cada momento que passo pensando em você é como um raio de luz que ilumina o meu coração.",
  "Mesmo em dias nublados, o simples pensamento do seu sorriso colore tudo de alegria.",
  "Você é a razão de eu acreditar que pequenas coisas podem ter o maior significado.",
  "Quando você está por perto, o mundo parece se ajustar perfeitamente à nossa felicidade.",
  "Não há distância que diminua a força do que sinto por você; mesmo longe, você está comigo.",
  "Eu me perco no brilho dos seus olhos e encontro um universo inteiro de amor e aconchego.",
  "Você é a melhor parte de todos os meus dias, e cada lembrança sua se torna eterna no meu coração.",
  "Mesmo sem palavras, o simples toque seu fala mais do que qualquer declaração.",
  "Se eu pudesse colocar cada batida do meu coração em uma frase, ela seria sempre sobre você.",
  "O amor que sinto por você cresce a cada sorriso, a cada olhar e a cada momento compartilhado.",
  "Você é o motivo dos meus sorrisos mais sinceros e dos meus pensamentos mais doces.",
  "Mesmo nos dias mais difíceis, pensar em você faz tudo se tornar mais leve e colorido.",
  "Estar contigo é descobrir que felicidade verdadeira não está em grandes coisas, mas nos detalhes.",
  "Você é minha inspiração, meu porto seguro e minha alegria constante.",
  "Nada se compara ao calor do seu abraço e à sensação de que tudo está no lugar certo.",
  "Quando penso em você, o tempo parece desacelerar só para que eu possa aproveitar cada segundo.",
  "Amar você é a aventura mais bonita que eu poderia viver, sem mapas ou limites.",
  "Cada gesto seu deixa uma marca doce na minha memória e um sorriso no meu coração.",
  "Se o mundo inteiro pudesse sentir o que eu sinto por você, haveria apenas amor e luz por todos os lados."
];

let frasesDisponiveis = [...frases];

function mostrarMensagem() {
  const texto = document.getElementById("texto");
  if (frasesDisponiveis.length === 0) frasesDisponiveis = [...frases];
  const indice = Math.floor(Math.random() * frasesDisponiveis.length);
  const fraseSelecionada = frasesDisponiveis[indice];
  frasesDisponiveis.splice(indice, 1);
  texto.innerText = fraseSelecionada;
  texto.classList.add("ativo");
  setTimeout(() => texto.classList.remove("ativo"), 5000);
}

// Função da timeline
function toggleItem(elemento) {
  elemento.classList.toggle("ativo");
}
