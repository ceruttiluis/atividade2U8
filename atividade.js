console.log("Selecione o dia do evento");
var dataDoEvento = 15;
let dataAtual = new Date();
if((dataAtual.getDate())<dataDoEvento){
    console.log("Digite a sua idade");
}else{
    console.log("Data não disponivel");
}

var idade = 45;
if(idade>=18){
    console.log("Digite a lista de participantes");
}else{
    console.log("Idade não permitida");
}
console.log("Digite o nome dos participantes");

let nomeDosParticipantes = ["Julio","Ademar","Inácio","Flávio"];
let nomeTotal = nomeDosParticipantes.length

console.log (nomeDosParticipantes)

if(nomeTotal < 100){
    console.log ("Evento cadastrado")
}else{
    console.log("O número de pessoas ultrapassou o limite")
}