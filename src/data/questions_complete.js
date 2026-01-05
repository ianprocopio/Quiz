const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "Qual tag é usada para criar uma quebra de linha?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        answer: "<br>",
        tip: "Break Line",
      },
      {
        question: "Qual atributo é usado para abrir um link em uma nova aba?",
        options: ["target='_blank'", "new='tab'", "window='new'", "href='new'"],
        answer: "target='_blank'",
        tip: "Target Blank",
      },
      {
        question: "Qual tag define o título da página na aba do navegador?",
        options: ["<header>", "<meta>", "<title>", "<head>"],
        answer: "<title>",
        tip: "Fica dentro do <head>",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
        tip: "Alguma dica",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
        tip: "Alguma dica",
      },
      {
        question: "Como você seleciona um elemento com o id 'demo'?",
        options: [".demo", "#demo", "demo", "*demo"],
        answer: "#demo",
        tip: "O seletor de ID usa uma cerquilha (#)",
      },
      {
        question: "Qual propriedade muda o tamanho da fonte?",
        options: ["text-style", "font-weight", "font-size", "text-size"],
        answer: "font-size",
        tip: "Tamanho da fonte em inglês",
      },
      {
        question: "Como centralizar um texto horizontalmente?",
        options: ["text-align: center", "vertical-align: middle", "font: center", "margin: center"],
        answer: "text-align: center",
        tip: "Alinhamento do texto",
      },
      {
        question: "Qual propriedade altera a cor de fundo?",
        options: ["color", "bgcolor", "background-color", "image-color"],
        answer: "background-color",
        tip: "Cor do plano de fundo",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "Qual comando exibe uma mensagem no console do navegador?",
        options: ["print()", "console.log()", "write()", "log.console()"],
        answer: "console.log()",
        tip: "Log no Console",
      },
      {
        question: "Qual operador é usado para atribuição de valor?",
        options: ["==", "===", "=", "=>"],
        answer: "=",
        tip: "Um único sinal de igual",
      },
      {
        question: "Como declaramos uma variável constante?",
        options: ["const", "let", "var", "constant"],
        answer: "const",
        tip: "Vem de Constant",
      },
      {
        question: "Qual símbolo é usado para comentários de uma linha?",
        options: ["/* */", "", "//", "#"],
        answer: "//",
        tip: "Duas barras",
      },
    ],
  },
];

export default data;
