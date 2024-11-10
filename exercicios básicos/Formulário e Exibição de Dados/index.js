function cadastro(){
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const endereco = document.getElementById("endereco").value;
    const casa = document.getElementById("casa").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const info = document.getElementById("info");

    info.innerText = `${nome} nasceu no dia ${data} e mora na rua ${endereco},
    número ${casa}, na cidade ${cidade} do estado ${uf}.`
    info.style.fontSize = "24px"
    info.style.color = "green"
    info.style.display = "block"
}