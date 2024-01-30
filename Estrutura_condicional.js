// condições com IF E ELSE (Básico "==")

var x = "";
var y = 0;

if (x == y){
    console.log("São Iguais")
}else{
    console.log("São diferentes");
}



// Condição if com igualdade Restrita, verifica o valor e o tipo de váriavel. (===)

var x = "";
var y = 0;

if(x === y) {
    console.log("X e Y são iguais");
}
else {
    console.log("X e Y são diferentes");
};


//If Ternário é a simplificação da condição. Ex:

var nota = 9;
var status = nota > 7 ? "Aprovado" : "Reprovado";
console.log(status);

// Sendo "?" = if e ":" = Else 


/* Curto - circuito   é possível simplificar um if de uma outra maneira 
chamada curto-circuito.*/

var aprovado = true;

aprovado && console.log("Parabéns");

// Importante: Curto-circuito não possui um equivalente ao else, por isso, o valor false é retornado sempre que a condição não é atendida.
