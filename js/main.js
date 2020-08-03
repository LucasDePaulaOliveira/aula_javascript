function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    window.open("https://www.google.com.br/");
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada.");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

//function soma(n1, n2) {
//    return n1 + n2;
//}
//function validaIdade(idade) {
//    var validar;
//    if (idade >= 18) {
//        validar = true;
//    }
//    else {
//        validar = false
//    }
//    return validar;
//}

//var idade = prompt("Informe sua idade.");
//console.log(validaIdade(idade));



//DATE
//var data = new Date();
//alert(data);
//alert(data.getUTCDate());
//alert(data.getHours());
/*
 * Estrutura de repetição (FOR WHILE)
 * 
 * 
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}
*/
/*
var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
*/

/* 
 * CONDICIONAL (IF ELSE)
 * 
 * 
 * var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    alert("Maior de idade.");
}
else {
    alert("Menor de idade.");
}
*/
//var frutas = [{ nome: "Maçã", cor: "Vermelha" }, { nome: "Uva", cor: "Roxa" } ];
//console.log(frutas.nome + " é da cor " + fruta.cor);
//alert(frutas[0].nome);
//var fruta = { nome: "Maçã", cor: "Vermelha" };
//console.log(fruta.nome + " é da cor " + fruta.cor);
//var lista = ["Maça", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();
//console.log(lista.toString());
//console.log(lista.join(" - "));
//var nome = "Lucas de Paula Oliveira";
//var idade = 31;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo.";
//alert(nome + " tem " + idade + " anos." );
//alert(idade + idade2);
//console.log(idade);
//console.log(nome);
//console.log(frase.replace("Japão", "Brasil"));