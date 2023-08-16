// Selecionando elementos do DOM pelo ID
const principal = document.querySelector('#principal'); // Selecionando o elemento com o ID 'principal'
const secundario = document.querySelector('#secundario'); // Selecionando o elemento com o ID 'secundario'
console.log(principal); // Imprimindo o elemento 'principal' no console
console.log(secundario); // Imprimindo o elemento 'secundario' no console

let contador = 0; // Inicializando um contador
let contadorSecundario = 0; // Inicializando outro contador

// Adicionando um evento de clique ao elemento 'principal'
principal.addEventListener('click', () => {
  contador++; // Incrementando o contador
  principal.innerHTML = `Mudando: ${contador} vezes`; // Alterando o conteúdo do elemento 'principal'

  const titulo = document.querySelector('h1'); // Selecionando o elemento 'h1'
  titulo.style.backgroundColor = '#7FFF00'; // Mudando a cor de fundo do elemento 'h1'

  const alguem = document.querySelector('.me-encontre'); // Selecionando o elemento com a classe 'me-encontre'

  console.log('Apertou já'); // Imprimindo mensagem no console
  console.log('Virou Verde'); // Imprimindo mensagem no console
});

// Adicionando um evento de clique ao elemento 'secundario'
secundario.addEventListener('click', () => {
  contador++; // Incrementando o contador
  secundario.innerHTML = `Mudando o segundo que virou o primeiro: ${contador} vezes`; // Alterando o conteúdo do elemento 'secundario'

  const titulo = document.querySelector('h1'); // Selecionando o elemento 'h1'
  titulo.style.backgroundColor = '#0000FF'; // Mudando a cor de fundo do elemento 'h1'

  const alguem = document.querySelector('.me-encontre'); // Selecionando o elemento com a classe 'me-encontre'

  console.log('Virou Azul'); // Imprimindo mensagem no console
  console.log('Apertou de novo'); // Imprimindo mensagem no console
});

// Selecionando elementos do DOM pelo ID
const tituloElemento = document.getElementById('titulo'); // Selecionando o elemento com o ID 'titulo'
const paragrafoElemento = document.querySelector('p'); // Selecionando o primeiro elemento 'p' encontrado
const botaoElemento = document.getElementById('botao'); // Selecionando o elemento com o ID 'botao'

// Adicionando um evento de clique ao botão
botaoElemento.addEventListener('click', function () {
  // Alterando o texto do título
  tituloElemento.textContent = 'Título modificado pelo JavaScript!';

  // Alterando o texto do parágrafo
  paragrafoElemento.textContent = 'Texto do parágrafo modificado pelo JavaScript!';

  // Alterando o texto do botão
  botaoElemento.textContent = 'Clicado!';
});