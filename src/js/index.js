const cartaoSelecionado = document.querySelector ('.selecionada')
const sliders = document.querySelectorAll ('.slider')
const btnAvancar = document.getElementById ('btn-avancar')
const btnVoltar = document.getElementById ('btn-voltar')
let cartaoAtual = 0;

function escondercartaoSelecionado (){
    const cartaoSelecionado = document.querySelector ('.selecionada')
    cartaoSelecionado.classList.remove ('selecionada')
}

function mostrarCartao (indiceCartao){
    sliders[cartaoAtual].classList.add ('selecionada');
}

btnAvancar.addEventListener ('click', function (){
        if(cartaoAtual === sliders.length -1) return
        escondercartaoSelecionado ()
        cartaoAtual++;
        mostrarCartao (cartaoAtual)
} )

btnVoltar.addEventListener ('click', function (){
       if(cartaoAtual === 0) return        
        escondercartaoSelecionado ()
        cartaoAtual--;
        mostrarCartao (cartaoAtual)
})