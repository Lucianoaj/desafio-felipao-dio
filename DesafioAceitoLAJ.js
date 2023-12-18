let nickname = "Mundo_Paralleo"
let xp = 7799
let nivelRank = ["FERRO", "BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTE", "IMORTAL", "IMORTAL", "RADIANTE"]
let nR = 0
const iniName = "Parabéns seu jogador de nome: "
const fimNivel = " está no nível: "
const fimXp = " com XP de: "
if (xp <1000){
    console.log( iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=1001 && xp <=2000){
    nR+=1
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=2001 && xp <=6000){
    nR+=2
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=6001 && xp <=7000){
    nR+=3
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=7001 && xp <=8000){
    nR+=4
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=8001 && xp <=9000){
    nR+=5
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=9001 && xp <=10000){
    nR+=6
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}
else if (xp >=10001){
    nR+=7
    console.log(iniName + nickname + fimNivel + nivelRank[nR] + fimXp + xp)
}