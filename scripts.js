
 function selecionarfrango(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho .selecionado ')


    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
     }

    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
 }


 function selecionarbebida(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho2 .selecionado')


    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
     }

    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
 }

 function selecionarsobremesa(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho3 .selecionado')


    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
     }

    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
 }



 