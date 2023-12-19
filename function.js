torrar()
function torrar(){
    console.log("torrando pão")
    injetarPao()
}
// ela só funciona por que tem a função torra() o comando function torrar() é quem chama (ativa) o torrar()
// podemos ter uma função dentro de outra função também, exemplo injetarPao().

function injetarPao(){
    console.log("preparando para injetar pão")
    console.log("finalizado")
}

// cuidado na hora de trabalhar com function "não começe o nome da função com numero, não coloque nome com espaço" e o mais importante de tudo
//function são Ações, então sempre cadastre ela com nome da relação da ação que ela faz de maneira clara exemplo " function salvarNoBancoDeDados"
//outra pratica é que a função faça uma ação apenas. "cada gato na sua caixa"
// exemplo: função que pega todos os dados   
//
//essa function main "estamos usando para chamar todas as outras function seguintes facilitando assim"
mainDataBase()
function mainDataBase(){
    getData()
    checkValeus()
    sendToDataBase()
}
//
function getData(){
// colocar, implementar a lógica aqui
    console.log("pegando dados do usuário")
}

function checkValeus(){
    // continuando o exemplo essa função é relacionada a de cima ela faz um check dos valores 
        console.log("validando os dados")
    }
    
function sendToDataBase(){
// já essa é a função de enviar as informação coletadas na primeira função ao banco de dados
    console.log("cadastrando e salvando os dados")
}

// use a premissa cada gato na sua caixa, você pode, mas não deve, criar uma function que tenha inumeras ações dentro,
// pois se essa function quebra (bug) você para as outras operações também e fica mais dificil de descobrir o erro. 
// Geralmente quando temos um grupo de funções relacionadas, gostariamos de chamar todas juntos - 
// para isso geralmente existe uma function chamada main - (uma especie de função principal) - lembre apenas da ordem de inserção conforme a lógica

//