let idade = 18
let humano = true
let aniversario = "dezembro"
let nome = "JØRDAN"
let sobrenome = "SANTØS"

if (idade >= 18){
    console.log('Voce é maior de idade')
}

if (idade >= 18 && humano == true){
    console.log('Voce meu guerreiro,está adentrando um territorio proibido. Seu humano.')
}else{
    console.log('Voce não é humano sai daqui')
}

if (aniversario =="dezembro" || aniversario =="janeiro"){
    console.log ('Voce é o azarado do ano')
}

if (nome[0] == "r"){
    console.log ("parabens voce o vencedor dá letra menos conhecida a R")
}else{
    console.log ("Parabens voce é ser humaninho que tem a letra J no começo de nome")
}

if (nome[0] == "r" || sobrenome.length >= 6){
    console.log ("Parabens Voce é a pessoa que ou Tem a letra menos conhecida que é o R, ou tem menor sobrenome mediano")
}
