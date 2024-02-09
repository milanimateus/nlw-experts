const Perguntas = [
  {
    pergunta: "Qual é a minha cor favorita?",
    respostas: [
      "Azul",
      "Vermelho",
      "Verde",
      "Preto"
    ],
    correta: 3
  },
  {
    pergunta: "Para qual time eu torço?",
    respostas: [
      "Flamengo",
      "Cruzeiro",
      "São Paulo",
      "Atlético Mineiro"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a minha comida favorita?",
    respostas: [
      "Hambúrguer",
      "Sushi",
      "Pizza",
      "Churrasco",
    ],
    correta: 3
  },
  {
    pergunta: "Em que mês eu nasci?",
    respostas: [
      "Março",
      "Abril",
      "Julho",
      "Setembro"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o meu esporte favorito?",
    respostas: [
      "Futebol",
      "Basquete",
      "Handebol",
      "Vôlei"
    ],
    correta: 0
  },
  {
    pergunta: "Qual era minha matéria favorita na escola?",
    respostas: [
      "Matemática",
      "Português",
      "História",
      "Geografia"
    ],
    correta: 2
  },
  {
    pergunta: "Qual a minha série favorita?",
    respostas: [
      "Grey's Anatomy",
      "Game of Thrones",
      "Suits",
      "Vikings"
    ],
    correta: 3
  },
  {
    pergunta: "Qual é a minha atividade favorita?",
    respostas: [
      "Estudar",
      "Ir à Academia",
      "Jogar no PC",
      "Ver série"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a minha estação do ano preferida?",
    respostas: [
      "Verão",
      "Outono",
      "Inverno",
      "Primavera"
    ],
    correta: 2
  },
  {
    pergunta: "Qual país eu gostaria de visitar?",
    respostas: [
      "Estados Unidos",
      "França",
      "Itália",
      "Suíça"
    ],
    correta:3 
  },
];

const corretas = new Set()
const totalDePerguntas = Perguntas.length
const mostrarAcertos = document.querySelector('#acertos span')
mostrarAcertos.textContent = corretas.size + ' de ' + totalDePerguntas

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
//const quizItem = template.content.cloneNode(true)
//quiz.appendChild(quizItem)

for(const item of Perguntas){
  const quizItem = template.content.cloneNode(true)

  //modifica o h2 para colocar todas as perguntas
  quizItem.querySelector('h3').textContent = item.pergunta

  for(const respostas of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name','pergunta-' + Perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)

    dt.querySelector('input').onchange = (event) =>{
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }

      mostrarAcertos.textContent = corretas.size + ' de ' + totalDePerguntas
    }



    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  //coloca a pergunta na tela 
  quiz.appendChild(quizItem)
}