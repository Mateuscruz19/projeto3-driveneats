

 function selecionarfrango(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho .selecionado')
    const iconeselecionado = document.querySelector('.selecionado .icone')

    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
    iconeselecionado.classList.add('escondido')
     }
     
    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
    const iconeescondido = document.querySelector('.selecionado .escondido')

    iconeescondido.classList.remove ('escondido')
 }




 function selecionarbebida(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho2 .selecionado')
    const iconeselecionado = document.querySelector('.selecionado .icone')

    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
    iconeselecionado.classList.add('escondido')
     }
     
    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
    const iconeescondido = document.querySelector('.selecionado .escondido')

    iconeescondido.classList.remove ('escondido')
 }

 function selecionarsobremesa(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho3 .selecionado')
    const iconeselecionado = document.querySelector('.selecionado .icone')

    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
    iconeselecionado.classList.add('escondido')
     }
     
    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
    const iconeescondido = document.querySelector('.selecionado .escondido')

    iconeescondido.classList.remove ('escondido')
 }
 