/*
Refaça o script anterior, mas agora pergunte ao usuário quantos números ele
deseja inserir no array. Depois, o usuário vai preenchendo elemento por
elemento do vetor, ao final, exiba o array e o array ao contrário
*/
var pergunta
var contador = 0
var arrayNumero = []
var contrário = []
pergunta = parseInt(prompt("Quantos números você deseja?"))
for (var index = 0; index < pergunta; index++) {
    arrayNumero[index] = parseInt(prompt("Insira um número"))
    
}
console.log(arrayNumero)

for (var dxContrário = pergunta - 1; dxContrário >= 0; dxContrário--) {
    contrário[dxContrário] = arrayNumero[contador]
    contador++
}
console.log(contrário)