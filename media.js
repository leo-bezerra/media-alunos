/* SISTEMA DE MÉDIA POR ALUNO
let media1 = 1
let media2 = 7
let media3 = 7

let mediaTotal = (media1 + media2 + media3)/3

if (mediaTotal >=7) {
    console.log("Parabéns, você foi aprovado!")
} else {
    console.log("Você não atingiu a média, reprovado!")
}*/

function media(){
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)

    let media = (nota1 + nota2 + nota3)/3

    if (media >= 7)
     if(media==10)
        swal("Parabéns, você foi aprovado com média máxima: " +media)
     else
        swal("Parabéns, você foi aprovado com média: " +media)
    else
        swal("Reprovado! Você não antingiu o média necessária.")

   }
