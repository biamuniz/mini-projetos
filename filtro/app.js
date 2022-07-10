// Define lista de objetos, um para cada região
let dados = [
  {
    "Ano": 2012,
    "Febre Amarela": 49,
    "Hepatite A": 0,
    "Hepatite B": 97,
    "Meningococo C": 96,
    "Penta": 25,
    "Pneumococica": 88,
    "Pneumococica(1 ref)": 0,
    "Poliomielite": 97,
    "Rotavirus Humano": 86,
    "Triplice Viral  D1": 100,
    "Triplice Viral  D2": 0
  },
  {
    "Ano": 2013,
    "Febre Amarela": 52,
    "Hepatite A": 0,
    "Hepatite B": 101,
    "Meningococo C": 100,
    "Penta": 96,
    "Pneumococica": 94,
    "Pneumococica(1 ref)": 93,
    "Poliomielite": 101,
    "Rotavirus Humano": 94,
    "Triplice Viral  D1": 107,
    "Triplice Viral  D2": 69
  },
  {
    "Ano": 2014,
    "Febre Amarela": 47,
    "Hepatite A": 60,
    "Hepatite B": 96,
    "Meningococo C": 96,
    "Penta": 95,
    "Pneumococica": 93,
    "Pneumococica(1 ref)": 88,
    "Poliomielite": 97,
    "Rotavirus Humano": 93,
    "Triplice Viral  D1": 113,
    "Triplice Viral  D2": 93
  },
  {
    "Ano": 2015,
    "Febre Amarela": 46,
    "Hepatite A": 97,
    "Hepatite B": 98,
    "Meningococo C": 98,
    "Penta": 96,
    "Pneumococica": 94,
    "Pneumococica(1 ref)": 88,
    "Poliomielite": 98,
    "Rotavirus Humano": 95,
    "Triplice Viral  D1": 96,
    "Triplice Viral  D2": 80
  },
  {
    "Ano": 2016,
    "Febre Amarela": 45,
    "Hepatite A": 72,
    "Hepatite B": 105,
    "Meningococo C": 92,
    "Penta": 89,
    "Pneumococica": 95,
    "Pneumococica(1 ref)": 84,
    "Poliomielite": 84,
    "Rotavirus Humano": 89,
    "Triplice Viral  D1": 95,
    "Triplice Viral  D2": 77
  },
  {
    "Ano": 2017,
    "Febre Amarela": 47,
    "Hepatite A": 79,
    "Hepatite B": 84,
    "Meningococo C": 87,
    "Penta": 84,
    "Pneumococica": 92,
    "Pneumococica(1 ref)": 76,
    "Poliomielite": 85,
    "Rotavirus Humano": 85,
    "Triplice Viral  D1": 86,
    "Triplice Viral  D2": 73
  },
  {
    "Ano": 2018,
    "Febre Amarela": 60,
    "Hepatite A": 83,
    "Hepatite B": 89,
    "Meningococo C": 88,
    "Penta": 88,
    "Pneumococica": 95,
    "Pneumococica(1 ref)": 82,
    "Poliomielite": 90,
    "Rotavirus Humano": 91,
    "Triplice Viral  D1": 93,
    "Triplice Viral  D2": 77
  },
  {
    "Ano": 2019,
    "Febre Amarela": 62,
    "Hepatite A": 85,
    "Hepatite B": 71,
    "Meningococo C": 87,
    "Penta": 71,
    "Pneumococica": 89,
    "Pneumococica(1 ref)": 83,
    "Poliomielite": 84,
    "Rotavirus Humano": 85,
    "Triplice Viral  D1": 93,
    "Triplice Viral  D2": 82
  },
  {
    "Ano": 2020,
    "Febre Amarela": 57,
    "Hepatite A": 75,
    "Hepatite B": 77,
    "Meningococo C": 79,
    "Penta": 77,
    "Pneumococica": 81,
    "Pneumococica(1 ref)": 71,
    "Poliomielite": 76,
    "Rotavirus Humano": 77,
    "Triplice Viral  D1": 80,
    "Triplice Viral  D2": 63
  },
  {
    "Ano": 2021,
    "Febre Amarela": 57,
    "Hepatite A": 67,
    "Hepatite B": 70,
    "Meningococo C": 71,
    "Penta": 70,
    "Pneumococica": 73,
    "Pneumococica(1 ref)": 65,
    "Poliomielite": 69,
    "Rotavirus Humano": 70,
    "Triplice Viral  D1": 73,
    "Triplice Viral  D2": 51
  }
]

// Seleciona a <ul> da página, para popularmos ela
let lista = document.querySelector( 'ul' )

// Cria elementos para o gráfico
for ( let dado of dados ) {

  // Cria elemento pai (<li>)
  let item = document.createElement( 'li' )

  // Cria elementos filhos (<span>)
  let rotulo = document.createElement( 'span' )
  let barra = document.createElement( 'span' )
  let percentual = document.createElement( 'span' )
  
  // Adiciona texto ao elemento
  rotulo.textContent = dado.Ano

  // Adiciona classes para aplicar CSS e selecionar via JS
  rotulo.classList.add( 'rotulo' )
  barra.classList.add( 'barra' )
  percentual.classList.add( 'percentual' )

  // Insere os elementos na página
  item.append( rotulo )
  item.append( barra )
  item.append( percentual )

  lista.append( item )

}

// Seleciona todas as <li> da página
let itens = document.querySelectorAll( 'li' )

// Seleciona o elemento <select>
let seletor = document.querySelector( 'select' )

// Quando a opção do seletor mudar, dispara uma funcão
seletor.addEventListener( 'change', redimensionaBarras )

// Define a função que muda o comprimento das barras
function redimensionaBarras() {

  // Identifica o vacina que a pessoa selecionou
  let vacina = seletor.value
  
  // Para cada região…
  for ( let dado of dados ) {

    // Guarde a região atual
    let Ano = dado.Ano

    // Para cada <li>…
    for ( let item of itens ) {

      // Selecione seu respectivo elemento com nome da região
      let rotulo = item.querySelector( '.rotulo' )

      // Se o texto desse elemento for igual ao da região que está nos meus dados
      if ( rotulo.textContent == Ano ) {
        
        // Seleciona os respectivos elementos .barra e .percentual
        let barra = item.querySelector( '.barra' )
        let percentual = item.querySelector( '.percentual' )

        // Guarda o valor dado.gatos ou dado.cachorros, dependendo da opção selecionada
        let valor = dado[ vacina ]

        // Calcula o comprimento para as barras (o valor 4 é arbitrário)
        let largura = valor * 8
        
        // Aplica o comprimento à barra
        barra.style.width = largura + 'px' 

        // Adiciona o percentual, como texto
        percentual.textContent = valor + '%'

      }

    }

  }

}

// Desenha o gráfico assim que a página for carregada
redimensionaBarras()