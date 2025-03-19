let amigos = []

function adicionarAmigo(){
    let amigo = document.querySelector('input').value
    let lista = document.getElementsByClassName('listaDeAmigos')[0]
    let paragrafo = document.createElement('p')

    if (amigo.trim() !== ""){
        amigos.push(amigo)
        paragrafo.textContent = amigo
        lista.appendChild(paragrafo)
        document.querySelector('input').value = ""
    } else{
        alert("insira um nome válido")
    }

    
    console.log(amigos)
}


function sortearAmigo(){
    let indice = Math.floor(Math.random() * amigos.length);
    let lista = document.getElementsByClassName('listaDeAmigos')[0]
    let mensagemAmigoSecreto = `<p style="color: green; font-weight: bold;">o amigo secreto sorteado é ${amigos[indice]}`
    lista.innerHTML = mensagemAmigoSecreto

    amigos = []
}


