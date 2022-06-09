function calc() {
    var vvt1 = document.querySelector('div#vott')
    var result = document.querySelector('input#text1')
    var voto = Number(result.value)
    var nome = document.querySelector('input#text2')
    var nomes = String(nome.value)
    var ola = document.querySelector('div#vot')
    ola.innerHTML = (`Olá <strong>${nomes}</strong>, seu voto é:`)

    if (voto >= 18 && voto < 65) {
        vvt1.innerHTML = ("Obrigatório")
    } else if (voto >= 16){
        vvt1.innerHTML = ('Facultativo')
    } else {
        vvt1.innerHTML = ('Não Vota')
    }

} 
 