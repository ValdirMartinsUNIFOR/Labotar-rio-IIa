function Resultado() {
    var nome = document.forms["Notador"]["nome"].value;
    var nome = nome.toString();
    var nome = nome.split(" ");
    var resultado = "";
    for(i = 0;nome[i] != undefined;i++) {
        if(i == 0) {
            resultado = resultado + nome[nome.length - 1] + " " + nome[i] + ",";
        }
        else {
            if(i > 0 && nome[i] != nome[nome.length - 1] && nome[i] != "de" && nome[i] != "da" && nome[i] != "do" && nome[i] != "De" && nome[i] != "Da" && nome[i] != "Do" && nome[i] != "DE" && nome[i] != "DA" && nome[i] != "DO") {
                resultado = resultado + " " + nome[i].charAt(0);
            }
        }
    }
    document.forms["Notador"]["resultado"].value = resultado;
}