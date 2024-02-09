    var nomeGlobal;
    var mesagemGlobal;

    function conferirMensagemWhatsAPP(){
    var nome =document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    nomeGlobal =nome;
    mensagemGlobal = mensagem;

    document.getElementById("confNome").textContent = nome;

    document.getElementById("confMsg").textContent = mensagem;

}
    function enviar(){

    var numerotelefone = "5541998301006"

    var linkdoWhatsApp = "https://wa.me/" +
    numerodetelefone +
    "text=nome" +
    nomeGlobal +
    " - "  +
    mennsagemGlobal;

    window.open(linkwhatsApp, "_blank");


}