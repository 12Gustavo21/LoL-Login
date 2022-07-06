const caixa_1 = document.querySelector('.usuario')
const caixa_2 = document.querySelector('.senha')
const botaos = document.querySelector('.Button')

caixa_1.addEventListener('input', fun)
caixa_2.addEventListener('input', fun)

function fun(){
    if (caixa_1.value && caixa_2.value.length >=8) {
        botaos.classList.add('botão1')
    } else {
        botaos.classList.remove('botão1')
    }
}