const duvida = document.getElementById('inputPergunta')
const opcao1 = document.getElementById('opcaoA')
const opcao2 = document.getElementById('opcaoB')
const butoes = document.querySelectorAll('.carac');

const adicionar = document.getElementById('btn-adicionar')


const lista = document.getElementById('li-decisoes');
const listaButtons = document.getElementById('listaBtn');



 let DadosDaPergunta = {
  texto: "",
  opcaoA: "",
  opcaoB: ""
};

function salvarDados(){
    DadosDaPergunta.texto = duvida.value;
    DadosDaPergunta.opcaoA = opcao1.value;
    DadosDaPergunta.opcaoB = opcao2.value;
    
    console.log("Dados salvos com sucesso:", DadosDaPergunta);
}

adicionar.addEventListener("click", () => {
    salvarDados();
    if (DadosDaPergunta.texto === "") {
        alert("Digite a pergunta");
        return;
    }

    const li = document.createElement("li");
    li.textContent = DadosDaPergunta.texto;
    li.classList.add("criada");
    

    lista.appendChild(li); 
    duvida.value = "";
    opcao1.value = "";
    opcao2.value = "";
});


butoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        botao.classList.toggle("selecionada");
    
    });
});

let dadosCalculo = {
    
}




