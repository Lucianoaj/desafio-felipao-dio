// retorno é uma saída da function
// boa pratíca no retorn é atribuir apenas uma sainda, vejamos: no return não posso retornar dois valores, até posso mas dentro de um modulo. 

let resultado = soma(5, 20)
// veja que para chamar o resultado (return) devo salvar(let) a function dentro de uma variavel (resultado) ou pode chamar o valor direto, mas não fica visualmente legivel cod.
console.log("o resultado do somatório é = " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    // também é possível retornar direto a expressão, retirando a variavel (let somatorio) ficando em seu lugar apenas (return numA +numB)
    return somatorio
}
// parte 2 >
// função completa do dia a dia. ex: uma pessoa colocou o nome completo, mas queremos apenas que retorne o primeiro nome. ex.:

let result = nome("Luciano ", "Andrade ", "Jorge")
console.log(result)
function nome(firstName1, mediumName, lastName1){
        return firstName1 + mediumName
}
// parte 2> function dia a dia. 
// uso do .split(" ") serve para pegar cada lugar do texto que tem um espaço e quebrar. coloca cada um dos textos separados por esse " "(espaço) em um vetor. ex. [luciano andrade jorge]
// no local onde está o espaço é como se preenchido com a , separando cada elemento. (pode colocar para quebrar por espaço ponto e virgulo " " o que vc achar melhor) foramndo posição 0,1,2
// existe o splitChar também que no caso separa a variavel por - ex:[luciano-andrade-jorge] ao usar splitChar
let userName = getFirstName("Luciano Andrade Jorge", " ")
console.log("welcome " + userName)
userName = getFirstName("Luciano-Andrade-Jorge", "-")
console.log("welcome " + userName)
function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}
// nesse caso o resultado vai retornar apenas o Luciano ou seja a posição [0]