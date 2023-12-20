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
