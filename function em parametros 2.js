torrar("pão de forma", "Mundo_Parallelo")
function torrar(pao, nome = "cliente novo"){
    console.log("torrada feita com " + pao + " para o " + nome)  
}
// veja que na variavel nome foi colocado um nome de cliente gererico cado não tenho o nome do cliente. 
// exemplo
assar("pão caseiro",undefined, 19.99)
function assar(pao, nome = "Cliente Fiel", valor){
    console.log("Assado e fresquinho " + pao + " para o " + nome + " Valor total a Pagar R$ " + valor)
}
// ao rodar, veja o resulto e qual variavel é chamada em cada caso. 
// veja, sempre que tiver valor opcional (variavel) deixe ele por último ou fazer uma gambiarra, use (underfined)
//Uso de variaveis em meio ao texto de maneira eficiente. escrever o texto ente acento ` ` e colocar ${variavel} exemplo:
createStringConnection("db_products", "Mundo_parallelo", "1112")
function createStringConnection(dataBaseNome, user, pass){
    console.log(`connect:DBCONNECT; user=${user}; pass=${pass}; initial_database=${dataBaseNome}`)

}
// isso se chama de interpolação de extremes. é um uso mais global. `variaveis=${variavel}` 