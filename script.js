console.log("=========================================")
console.log("   BONS ALUNOS MERECEM PARABÉNS      ")
console.log("=========================================")
let msg = document.querySelector(".msg");
let msg2 = document.querySelector(".msg2");


let nota1 = parseInt(prompt("digite a nota 1: "))
let nota2 = parseInt(prompt("digite a nota 2: "))
let nota3 = parseInt(prompt("digite a nota 3: "))
let media = (nota1 + nota2 + nota3) / 3;

msg.innerHTML = `A média do aluno é ${media.toFixed(2)}`
if(media >= 7){
    msg2.innerHTML = "PARABÉNS!!";
}