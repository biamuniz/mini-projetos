// Carregar os dados
let leituras = [
    {
      "limiteInferior": 0,
      "quantil": 25.2
    },
    {
      "limiteInferior": 1,
      "quantil": 58.1
    },
    {
      "limiteInferior": 2,
      "quantil": 66.7
    },
    {
      "limiteInferior": 3,
      "quantil": 70.3
    },
    {
      "limiteInferior": 4,
      "quantil": 72.6
    },
    {
      "limiteInferior": 5,
      "quantil": 74.4
    },
    {
      "limiteInferior": 6,
      "quantil": 75.9
    },
    {
      "limiteInferior": 7,
      "quantil": 77.2
    },
    {
      "limiteInferior": 8,
      "quantil": 78.3
    },
    {
      "limiteInferior": 9,
      "quantil": 79.1
    },
    {
      "limiteInferior": 10,
      "quantil": 80
    },
    {
      "limiteInferior": 11,
      "quantil": 80.8
    },
    {
      "limiteInferior": 12,
      "quantil": 81.5
    },
    {
      "limiteInferior": 13,
      "quantil": 82.4
    },
    {
      "limiteInferior": 14,
      "quantil": 83.1
    },
    {
      "limiteInferior": 15,
      "quantil": 83.7
    },
    {
      "limiteInferior": 16,
      "quantil": 84.1
    },
    {
      "limiteInferior": 17,
      "quantil": 84.6
    },
    {
      "limiteInferior": 18,
      "quantil": 85
    },
    {
      "limiteInferior": 19,
      "quantil": 85.2
    },
    {
      "limiteInferior": 20,
      "quantil": 85.8
    },
    {
      "limiteInferior": 21,
      "quantil": 86.2
    },
    {
      "limiteInferior": 22,
      "quantil": 86.7
    },
    {
      "limiteInferior": 23,
      "quantil": 87.2
    },
    {
      "limiteInferior": 24,
      "quantil": 87.6
    },
    {
      "limiteInferior": 25,
      "quantil": 87.9
    },
    {
      "limiteInferior": 26,
      "quantil": 88.3
    },
    {
      "limiteInferior": 27,
      "quantil": 88.6
    },
    {
      "limiteInferior": 28,
      "quantil": 88.9
    },
    {
      "limiteInferior": 29,
      "quantil": 89.1
    },
    {
      "limiteInferior": 30,
      "quantil": 89.5
    },
    {
      "limiteInferior": 31,
      "quantil": 89.8
    },
    {
      "limiteInferior": 32,
      "quantil": 89.9
    },
    {
      "limiteInferior": 33,
      "quantil": 90.2
    },
    {
      "limiteInferior": 34,
      "quantil": 90.4
    },
    {
      "limiteInferior": 35,
      "quantil": 90.6
    },
    {
      "limiteInferior": 36,
      "quantil": 90.8
    },
    {
      "limiteInferior": 37,
      "quantil": 90.9
    },
    {
      "limiteInferior": 38,
      "quantil": 91.1
    },
    {
      "limiteInferior": 39,
      "quantil": 91.3
    },
    {
      "limiteInferior": 40,
      "quantil": 91.5
    },
    {
      "limiteInferior": 41,
      "quantil": 91.7
    },
    {
      "limiteInferior": 42,
      "quantil": 91.9
    },
    {
      "limiteInferior": 43,
      "quantil": 92
    },
    {
      "limiteInferior": 44,
      "quantil": 92.2
    },
    {
      "limiteInferior": 45,
      "quantil": 92.4
    },
    {
      "limiteInferior": 46,
      "quantil": 92.6
    },
    {
      "limiteInferior": 47,
      "quantil": 92.7
    },
    {
      "limiteInferior": 48,
      "quantil": 92.8
    },
    {
      "limiteInferior": 49,
      "quantil": 92.9
    },
    {
      "limiteInferior": 50,
      "quantil": 93
    },
    {
      "limiteInferior": 51,
      "quantil": 93.1
    },
    {
      "limiteInferior": 52,
      "quantil": 93.3
    },
    {
      "limiteInferior": 53,
      "quantil": 93.4
    },
    {
      "limiteInferior": 54,
      "quantil": 93.5
    },
    {
      "limiteInferior": 55,
      "quantil": 93.6
    },
    {
      "limiteInferior": 56,
      "quantil": 93.8
    },
    {
      "limiteInferior": 57,
      "quantil": 93.9
    },
    {
      "limiteInferior": 58,
      "quantil": 94
    },
    {
      "limiteInferior": 59,
      "quantil": 94.1
    },
    {
      "limiteInferior": 60,
      "quantil": 94.1
    },
    {
      "limiteInferior": 61,
      "quantil": 94.2
    },
    {
      "limiteInferior": 62,
      "quantil": 94.4
    },
    {
      "limiteInferior": 63,
      "quantil": 94.5
    },
    {
      "limiteInferior": 64,
      "quantil": 94.6
    },
    {
      "limiteInferior": 65,
      "quantil": 94.7
    },
    {
      "limiteInferior": 66,
      "quantil": 94.7
    },
    {
      "limiteInferior": 67,
      "quantil": 94.8
    },
    {
      "limiteInferior": 68,
      "quantil": 94.8
    },
    {
      "limiteInferior": 69,
      "quantil": 95
    },
    {
      "limiteInferior": 70,
      "quantil": 95
    },
    {
      "limiteInferior": 71,
      "quantil": 95.1
    },
    {
      "limiteInferior": 72,
      "quantil": 95.1
    },
    {
      "limiteInferior": 73,
      "quantil": 95.2
    },
    {
      "limiteInferior": 74,
      "quantil": 95.3
    },
    {
      "limiteInferior": 75,
      "quantil": 95.3
    },
    {
      "limiteInferior": 76,
      "quantil": 95.4
    },
    {
      "limiteInferior": 77,
      "quantil": 95.4
    },
    {
      "limiteInferior": 78,
      "quantil": 95.5
    },
    {
      "limiteInferior": 79,
      "quantil": 95.6
    },
    {
      "limiteInferior": 80,
      "quantil": 95.6
    },
    {
      "limiteInferior": 81,
      "quantil": 95.7
    },
    {
      "limiteInferior": 82,
      "quantil": 95.7
    },
    {
      "limiteInferior": 83,
      "quantil": 95.8
    },
    {
      "limiteInferior": 84,
      "quantil": 95.8
    },
    {
      "limiteInferior": 85,
      "quantil": 95.9
    },
    {
      "limiteInferior": 86,
      "quantil": 96
    },
    {
      "limiteInferior": 87,
      "quantil": 96
    },
    {
      "limiteInferior": 88,
      "quantil": 96
    },
    {
      "limiteInferior": 89,
      "quantil": 96.1
    },
    {
      "limiteInferior": 90,
      "quantil": 96.1
    },
    {
      "limiteInferior": 91,
      "quantil": 96.2
    },
    {
      "limiteInferior": 92,
      "quantil": 96.2
    },
    {
      "limiteInferior": 93,
      "quantil": 96.2
    },
    {
      "limiteInferior": 94,
      "quantil": 96.3
    },
    {
      "limiteInferior": 95,
      "quantil": 96.3
    },
    {
      "limiteInferior": 96,
      "quantil": 96.3
    },
    {
      "limiteInferior": 97,
      "quantil": 96.3
    },
    {
      "limiteInferior": 98,
      "quantil": 96.4
    },
    {
      "limiteInferior": 99,
      "quantil": 96.4
    },
    {
      "limiteInferior": 100,
      "quantil": 96.4
    },
    {
      "limiteInferior": 101,
      "quantil": 96.4
    },
    {
      "limiteInferior": 102,
      "quantil": 96.5
    },
    {
      "limiteInferior": 103,
      "quantil": 96.5
    },
    {
      "limiteInferior": 104,
      "quantil": 96.5
    },
    {
      "limiteInferior": 105,
      "quantil": 96.6
    },
    {
      "limiteInferior": 106,
      "quantil": 96.6
    },
    {
      "limiteInferior": 107,
      "quantil": 96.7
    },
    {
      "limiteInferior": 108,
      "quantil": 96.7
    },
    {
      "limiteInferior": 109,
      "quantil": 96.8
    },
    {
      "limiteInferior": 110,
      "quantil": 96.8
    },
    {
      "limiteInferior": 111,
      "quantil": 96.8
    },
    {
      "limiteInferior": 112,
      "quantil": 96.8
    },
    {
      "limiteInferior": 113,
      "quantil": 96.8
    },
    {
      "limiteInferior": 114,
      "quantil": 96.9
    },
    {
      "limiteInferior": 115,
      "quantil": 96.9
    },
    {
      "limiteInferior": 116,
      "quantil": 96.9
    },
    {
      "limiteInferior": 117,
      "quantil": 97
    },
    {
      "limiteInferior": 118,
      "quantil": 97
    },
    {
      "limiteInferior": 119,
      "quantil": 97
    },
    {
      "limiteInferior": 120,
      "quantil": 97
    },
    {
      "limiteInferior": 121,
      "quantil": 97.1
    },
    {
      "limiteInferior": 122,
      "quantil": 97.1
    },
    {
      "limiteInferior": 123,
      "quantil": 97.1
    },
    {
      "limiteInferior": 124,
      "quantil": 97.1
    },
    {
      "limiteInferior": 125,
      "quantil": 97.2
    },
    {
      "limiteInferior": 126,
      "quantil": 97.2
    },
    {
      "limiteInferior": 127,
      "quantil": 97.2
    },
    {
      "limiteInferior": 128,
      "quantil": 97.2
    },
    {
      "limiteInferior": 129,
      "quantil": 97.3
    },
    {
      "limiteInferior": 130,
      "quantil": 97.3
    },
    {
      "limiteInferior": 131,
      "quantil": 97.4
    },
    {
      "limiteInferior": 132,
      "quantil": 97.4
    },
    {
      "limiteInferior": 133,
      "quantil": 97.4
    },
    {
      "limiteInferior": 134,
      "quantil": 97.4
    },
    {
      "limiteInferior": 135,
      "quantil": 97.4
    },
    {
      "limiteInferior": 136,
      "quantil": 97.4
    },
    {
      "limiteInferior": 137,
      "quantil": 97.5
    },
    {
      "limiteInferior": 138,
      "quantil": 97.5
    },
    {
      "limiteInferior": 139,
      "quantil": 97.5
    },
    {
      "limiteInferior": 140,
      "quantil": 97.5
    },
    {
      "limiteInferior": 141,
      "quantil": 97.5
    },
    {
      "limiteInferior": 142,
      "quantil": 97.6
    },
    {
      "limiteInferior": 143,
      "quantil": 97.6
    },
    {
      "limiteInferior": 144,
      "quantil": 97.6
    },
    {
      "limiteInferior": 145,
      "quantil": 97.6
    },
    {
      "limiteInferior": 146,
      "quantil": 97.7
    },
    {
      "limiteInferior": 147,
      "quantil": 97.7
    },
    {
      "limiteInferior": 148,
      "quantil": 97.7
    },
    {
      "limiteInferior": 149,
      "quantil": 97.7
    },
    {
      "limiteInferior": 150,
      "quantil": 97.7
    }
  ]
  
  // Inverter a ordem dos dados
  leituras.reverse()
  
  
  
  // Seleciona o elemento <input>
  let entrada = document.querySelector( 'input' )
  
  // Seleciona o elemento <output>
  let saida = document.querySelector( 'output' )
  
  // Seleciona o elemento .preenchimento
  let preenchimento = document.querySelector( '.preenchimento' )
  
  
  // Dispara a função validar cada vez que o usuário digitar
  entrada.addEventListener( 'input', validar )
  
  // Define função de validação
  function validar() {
  
    // Pega a string que foi digitada
    let valor = entrada.value 
    
    // Força a conversão para número inteiro
    valor = parseInt( valor )
  
    // Se valor for maior que 0
    if ( valor > 0 ) {
      calcular( valor )
    }
    
    // Se não for um valor válido
    else {
      limpar()
    }
  
  }
  
  // Define função que encontra faixa de leitura
  function calcular( valor ) {
  
    // Para cada faixa de livros resenhados no goodreads
    for ( let leitura of leituras ) {
  
      // Se valor for maior que limite inferior
      if ( valor > leitura.limiteInferior ) {
  
        // Mostro a categoria atual
        let quantil = leitura.quantil
        mostrar( quantil )
  
        // Paro de checar
        break
      }
      
    }   
  
  }
  
  // Define função que mostra o percentual na tela
  function mostrar( quantil ) {
  
    saida.textContent = quantil + '%'
    preenchimento.style.width = quantil + '%'
  
  }
  
  // Define função que remove o percentual antigo
  function limpar() {
  
    saida.textContent = '…%'
    preenchimento.style.width = '0%'
  
  }