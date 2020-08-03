// Animacao OUT dos botoes menu
let btt1 = document.getElementById ("btt1")
let btt2 = document.getElementById ("btt2")
let btt3 = document.getElementById ("btt3")
let btt4 = document.getElementById ("btt4")
let btt5 = document.getElementById ("btt5")
let btt6 = document.getElementById ("btt6")
let btt7 = document.getElementById ("btt7")


btt1.addEventListener ("mouseover", out)
btt2.addEventListener ("mouseover", out)
btt3.addEventListener ("mouseover", out)

function out () {
    btt1.style.animationDuration = ".6s"
    btt2.style.animationDuration = ".6s"
    btt3.style.animationDuration = ".6s"
    
}

// Depois eu comento
let historia = document.getElementById ("historia")
let doenca = document.getElementById ("doenca")
let contato = document.getElementById ("contato")

btt1.addEventListener ("click", historiaf)
btt2.addEventListener ("click", doencaf)
btt3.addEventListener ("click", contatof)
btt5.addEventListener ("click", historiaf)
btt6.addEventListener ("click", doencaf)
btt7.addEventListener ("click", contatof)

function historiaf () {
    contato.style.display = "none"
    doenca.style.display = "none"
    historia.style.display = "inline"
}

function doencaf () {
    contato.style.display = "none"
    historia.style.display = "none"
    doenca.style.display = "inline"
}

function contatof () {
    historia.style.display = "none"
    doenca.style.display = "none"
    contato.style.display = "inline"
}
