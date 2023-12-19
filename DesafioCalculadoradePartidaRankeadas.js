// Calculadora de partidas Rankeadas
// o que deve ser utilizado: - variaveis, -operadores, -laçoes de repetição, - estruturas de decisões, - funções.
// Objetivo: CRIE UMA FUNÇÃO QUE RECEBE COMO PARÂMETRO A QUANTIDADE DE VITÓRIAS E DERROTAS DE UM JOGADOR, DEPOIS DISSO RETORNE O RESULTADO PARA UMA VARIÁVEL, O SALDO DE RANKEADOS
//DEVE SER FEITO ATRAVÉS DO CALCULO (VITÓRIAS - DERROTAS)
// SE vitórias for menor do que 10 = FERRO
// SE vitórias for entre 11 e 20 = BRONZE
// SE vitórias for entre 21 e 50 = prata
// SE vitórias for entre 51 e 80 = ouro
// SE vitórias for entre 81 e 90 =  DIAMENTE
// SE vitórias for entre 91 e 100 = LENDÁRIO
// SE vitórias for maior ou igual a 101 = IMORTAL
// # saída: Ao final deve se exibir uma mensagem: "O Herói tem de saldo de **(saldoVitórias)** está no nível de **(nível)**
//  if(balance < 10){
   // console.log("O Herói tem saldo de " + balance + " está no Nível de " + nivel)
//}


let balance = difference(39, 17)
function difference(winner, loser){
    let differenceBalance = winner - loser 
   return differenceBalance
}

let nivel = ["FERRO", "BRONZE", "PRATA", "OURO", "DIAMANTE", "LENDÁRIO", "IMORTAL"]
let iN = 0

if(balance <=10){
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}
else if(balance >=11 && balance <=20){
    iN+=1
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}
else if(balance >=21 && balance <=50){
    iN+=2
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}
else if(balance >=51 && balance <=80){
    iN+=3
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}
else if(balance >=81 && balance <=90){
    iN+=4
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}
else if(balance >=91 && balance <=100){
    iN+=5
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}
else if(balance >=101){
    iN+=6
    console.log("O Herói tem saldo de " + balance + " está no nível de " + nivel[iN])
}