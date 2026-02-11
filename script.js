const duvida = document.getElementById('inputPergunta')
const opcao1 = document.getElementById('opcaoA')
const opcao2 = document.getElementById('opcaoB')
const criterios = document.querySelectorAll('.carac');
const adicionar = document.getElementById('btn-adicionar')
const lista = document.getElementById('li-decisoes');
const listaButtons = document.getElementById('listaBtn');
const pesos = document.getElementById('listPesos')


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
    if(DadosDaPergunta.opcaoA === "" || DadosDaPergunta.opcaoB === ""){
        alert("Digite as opçoes")
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

document.getElementById('li-decisoes').addEventListener('click', function (e) {
  if (e.target.classList.contains('criada')) {
    console.log('Cliquei no item criado depois');

    
  }
});



criterios.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.classList.toggle("selecionada");
    
    if(botao.classList.contains("selecionada")){
        console.log("TESTE")
        pesos.classList.remove('hidden')
        

    }
    else{
        console.log("saiu")
        pesos.classList.add('hidden')
    }
    });
});

let dadosCalculo = {
    
}




