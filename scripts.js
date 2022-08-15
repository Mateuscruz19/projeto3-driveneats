
let principall;


 function selecionarfrango(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho .selecionado')
    const iconeselecionado = document.querySelector('.selecionado .icone')
    const produtinho = document.querySelector('.franguinho .titulo-frango')

    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
    iconeselecionado.classList.add('escondido')
    produtinho.innerHTML = ""
     }
     
    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
    const iconeescondido = document.querySelector('.selecionado .escondido')

    iconeescondido.classList.remove ('escondido')

    produto1 = produtinho.innerHTML;
    principall = botao.innerHTML;
     

    console.log(produto1)
    habilitaBotaoContinuar ()
 }

 let bebida;

 function selecionarbebida(botaoselecionadoo){

   const botaoexcluir = document.querySelector('.franguinho2 .selecionado')
   const iconeselecionado = document.querySelector('.selecionado .icone')

   if (botaoexcluir !== null){ 
   botaoexcluir.classList.remove('selecionado')
   iconeselecionado.classList.add('escondido')
    }
    
   const seletor = '.'+botaoselecionadoo;
   const botao = document.querySelector(seletor);
   botao.classList.add('selecionado')
   const iconeescondido = document.querySelector('.selecionado .escondido')

   iconeescondido.classList.remove ('escondido')

   habilitaBotaoContinuar ()
   bebida = botao.innerHTML;
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
   if(principall !== undefined){
       if(bebida !== undefined){
           if(sobremesa !== undefined){
               const botaoContinuar = document.querySelector('.botaofinal');
               botaoContinuar.classList.add('botaoverde');
               botaoContinuar.innerHTML = 'Fechar Pedido'
               
           }
       }
   }
   

function funcaowhatsapp(){
   if(habilitaBotaoContinuar !== undefined ){  
       let encoded = encodeURIComponent(`Olá, gostaria de fazer o pedido:
   - Prato: Frango Yin Yang 
   - Bebida: Coquinha Gelada 
   - Sobremesa: Pudim 
   Total: R$ 27.70`)
       window.open('https://wa.me/5575998741647?text='+encoded)
   }
 }
}