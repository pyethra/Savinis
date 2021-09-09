var listaPecas=[]
var nomePeca='Peça Teste'
var pesoPeca=300
var podeCadastrar=true

if (pesoPeca<100){
    console.log('Não há possibilidade de cadastrar!')
    podeCadastrar=false
}

if (listaPecas.length>10){
    console.log('Limite de peças atingido!')
    podeCadastrar=false
}

if (nomePeca.length<3){
    console.log('Tamanho de letras inferior ao permitido')
    podeCadastrar=false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log('Cadastro efetuado com sucesso')
} else {
    console.log('Impossível cadastrar a peças')
}

console.log('Listando peças cadastradas.')
for (var i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}