let tenta = 0
let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let res = document.querySelector("div#res")
let statusjogo = document.querySelector("div#statusjogo")

function zeratenta() {
    tenta = 0
    statusjogo.innerHTML = "foram 10 tentativas até aqui! FIN DE JUEGO"
}

function biloto() {
    let aposta = Number.parseInt(window.document.querySelector("input#aposta").value)
    tenta < 10 ? tenta++ : zeratenta()
    function maiormenor() {
        aposta < numeroRandomico ? res.innerHTML = "aposta menor que o numero!" : res.innerHTML = "aposta maior que o número!"
    }
    numeroRandomico == aposta ? res.innerHTML = `Acertou! O número é ${aposta}` : maiormenor()
}