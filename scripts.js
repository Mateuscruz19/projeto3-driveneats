
let principall;


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
    principall = botao.innerHTML;
    habilitaBotaoContinuar ()
 }

 let bebida;

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
    bebida = botao.innerHTML;
   habilitaBotaoContinuar ()
}

 let sobremesa;

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

    sobremesa = botao.innerHTML
    habilitaBotaoContinuar ()
 }



 function habilitaBotaoContinuar (){
   if(principall !== undefined && bebida !== undefined && sobremesa !== undefined){
               const botaoContinuar = document.querySelector('.botaofinal');
               botaoContinuar.classList.add('enable')
               botaoContinuar.classList.add('botaoverde');
               botaoContinuar.innerHTML = 'Fechar Pedido';   
               
           }
   }

function funcaowhatsapp(){
   if(habilitaBotaoContinuar !== undefined ){  
       let encoded = encodeURIComponent(`Olá, gostaria de fazer o pedido:
   - Prato: ${principall}
   - Bebida: ${bebida}
   - Sobremesa: ${sobremesa}
   Total: R$ 59.94`)
       window.open('https://wa.me/5575998741647?text='+encoded)
       
    }

 }
