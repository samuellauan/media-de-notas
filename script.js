const bt = document.querySelector('button#btnAdicionar')  // Seleciona o botão de adicionar nota
let nota = document.querySelector('input#nota') //reeber o valor da nota
let lista = document.querySelector('ul#listaNotas') // Seleciona a lista onde as notas serão exibidas
let btCalcular = document.querySelector('button#btnCalcular') // Seleciona o botão de calcular média
let resultado = document.querySelector('div#resultado') // Seleciona o parágrafo onde o resultado da média será exibido
let aluno = document.querySelector('input#aluno') // Seleciona o campo de input para o nome do aluno
let limpar = document.querySelector('button#btnLimpar') // Seleciona o botão de limpar a lista de notas e resultados

let alunos = [] // Array para armazenar os alunos e suas notas


  // Função para adicionar nome e nota à lista
  function adicionarNota() {
    let nome = aluno.value.trim() // Remove espaços em branco do início e do fim do nome do aluno
    let valor = Number(nota.value) // Converte o valor da nota para um número
    
    //Validações
     if (nome === '') {
      alert('Digite o nome do aluno')
      return
    }
    if (nota.value.trim() === '') {
      alert('Digite uma nota')
      return
    }

    if (isNaN(valor)) {
      alert('Digite um número válido')
      nota.value = ''
      return
    }

    // Verificação se o aluno já existe na lista de alunos
    let alunoExistente = alunos.find(a => a.nome === nome)

    if (alunoExistente) {
    alunoExistente.notas.push(valor)
    } else {
    alunos.push({
      nome: nome,
      notas: [valor]
    })
    }
  
    atualizarTela ()
    aluno.value = ''
    nota.value = ''
  }
  // Função para atualizar a tela com a lista de alunos, suas notas e médias
    function atualizarTela () {
      lista.innerHTML = ''

      alunos.forEach(aluno => {
        let soma = 0

        for (let nota of aluno.notas) {
          soma += nota
        }

        let media = soma / aluno.notas.length

        let p = document.createElement('li')
        p.innerHTML = `--${aluno.nome}--<br> Notas: ${aluno.notas.join('/ ')} <br> Média: ${media.toFixed(2)}`
        lista.appendChild(p)
      })
   }

  // Função para limpar a lista de notas e resultados
  limpar.addEventListener('click', ()=>{
    lista.innerHTML = ''
    resultado.innerText = ''
    alunos = []
   })

  // Adiciona evento de clique e tecla Enter para adicionar nota e nome do aluno
  nota.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      adicionarNota()
    }
  })
  aluno.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      adicionarNota()
    }
  })

 // Adiciona evento de clique para adicionar nota e nome do aluno
  bt.addEventListener('click', function() {
    adicionarNota()
  })
