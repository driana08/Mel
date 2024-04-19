console.log("eu sou o avatar")
const name = "Katara";
var age = 14;
const status = true;
const personagens = ["Suki, Sokka, Aang, Toph"];
const pessoa = {
    braco: "2",
    perna: "2",
}
//console.log(name + age + status)
//console.log(personagens)
//console.log (pessoa)
//const name1 = prompt("Qual o seu nome, forasteiro?");
//const element = document.getElementById("message")
//element.innerHTML = "Bem vindo, Sr(a) " + name1
//console.log(name1)
//const valor1 = prompt ("Insira um valor")
//const valor2 = prompt("Insira o segundo valor")
//const operação = prompt ("Para somar insira SOMAR")
//const resultado = parseInt(valor1) + parseInt(valor2)
//const element = document. getElementById("message")
// if (resultado && operação == "SOMAR") {
//     element.innerHTML = "O resultado da soma é" + resultado
// } else {
//     element.innerHTML = "Você não está somando"
// }
// element.innerHTML = "o resultado da soma é:" + soma
let numero = 10
while (numero >0) {
    console.log(numero); numero = numero -1;
}
const frutas=["Banana","Maça", "Pitaya"];

frutas.map ((fruta) => {
    console.log(fruta);
});