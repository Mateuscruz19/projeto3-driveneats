let principall;
let bebida;
let sobremesa;


/* - NAO DEU TEMPO FAZER O VALOR E O NOME NO WHATSAPP :( CHEGUEI PERTO DA LOGICA FALTANDO APENAS 10 minutos,DEIXAREI A LOGICA COMENTADA

let pratoescolhido;
let bebidaescolhido;
let sobremesaescolhido;

let valor1;
let valor2;
let valor3;
*/


let valortotal = valor1+valor2+valor3;

 function selecionarfrango(botaoselecionado){
    const botaoexcluir = document.querySelector('.franguinho .selecionado')
    const iconeselecionado = document.querySelector('.franguinho .selecionado .icone')

    if (botaoexcluir !== null){ 
    botaoexcluir.classList.remove('selecionado')
    iconeselecionado.classList.add('escondido')
     }

  

    const seletor = '.'+botaoselecionado;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado')
    const iconeescondido = document.querySelector('.selecionado .escondido')

    /*
    const teste2 = document.querySelector('.franguinho .titulo-frango')
    teste3 = teste2.innerHTML;
    console.log(teste3) */
     
     
     


    iconeescondido.classList.remove ('escondido') 
    principall = botao.innerHTML;
    habilitaBotaoContinuar ()
 }

 function selecionarbebida(botaoselecionado){

   const botaoexcluir = document.querySelector('.franguinho2 .selecionado')
   const iconeselecionado = document.querySelector('.franguinho2 .selecionado .icone')

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

 function selecionarsobremesa(botaoselecionado){

    const botaoexcluir = document.querySelector('.franguinho3 .selecionado')
    const iconeselecionado = document.querySelector('.franguinho3 .selecionado .icone')

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
   if(principall && bebida && sobremesa !== undefined){
               const botaoContinuar = document.querySelector('.botaofinal');
               document.querySelector('.botaofinal').disabled = false;
               botaoContinuar.classList.add('botaoverde');
               botaoContinuar.innerHTML = 'Fechar Pedido';   
               
           }
   }

function funcaowhatsapp(){
   if(habilitaBotaoContinuar !== undefined ){  
     const nome = prompt('Qual o seu nome?')
     const endereço = prompt('Qual o seu endereço?')
       let encoded = encodeURIComponent(`Olá, gostaria de fazer o pedido:
   - Prato: Frango Yin Yang
   - Bebida: água 300ml
   - Sobremesa: Pavé
   Total: R$ 27.70

   Nome: ${nome}
   Endereço ${endereço}`)
       window.open('https://wa.me/5575998741647?text='+encoded)
       
    }

 }
