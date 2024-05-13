// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const nome = gets();
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const nivel = parseInt(gets());
let guerreiros = [
  { nome: 'Felipon', nivel: 41 },
  { nome: 'Agmenus', nivel: 39 },
  { nome: 'Ellidan', nivel: 25 }
]
let guerreiro = guerreiros.find(guerreiro => guerreiro.nome === nome)

// TODO: Implemente a condição necessária para a exibição de cada mensagem
if (nivel >= 40) {
  console.log("Parabéns, valente " + guerreiro.nome + "! Sua coragem e habilidade são notáveis!")
} else if (nivel >= 30 && nivel < 40) {
  console.log("Quase lá, " + guerreiro.nome + "! Continue treinando!")
} else {
  console.log("Ainda é cedo, jovem " + guerreiro.nome + ". Treine mais!")
}
