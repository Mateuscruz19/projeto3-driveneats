let pratoescolhido;
let bebidaescolhido;
let sobremesaescolhido;

let valor1;
let valor2;
let valor3;
let valortotal;

 function selecionarfrango(botaoselecionado){
   const botaoligado = document.querySelector('.franguinho .selecionado')

    if (botaoligado !== null){ 
    botaoligado.classList.remove('selecionado')
     }

     pratoescolhido = botaoselecionado.querySelector('.titulo-frango').innerHTML;
     valor1 = botaoselecionado.querySelector('.valor').innerHTML
 
     botaoselecionado.classList.add('selecionado')

    habilitaBotaoContinuar ()
 }

 function selecionarbebida(botaoselecionado){
   const botaoligado = document.querySelector('.franguinho2 .selecionado')

    if (botaoligado !== null){ 
    botaoligado.classList.remove('selecionado')
     }
     bebidaescolhido = botaoselecionado.querySelector('.franguinho2 .titulo-frango').innerHTML;
     valor2 = botaoselecionado.querySelector('.valor').innerHTML
     botaoselecionado.classList.add('selecionado')

     bebida = botaoselecionado.innerHTML;
    habilitaBotaoContinuar ()
 }

 function selecionarsobremesa(botaoselecionado){
   const botaoligado = document.querySelector('.franguinho3 .selecionado')

    if (botaoligado !== null){ 
    botaoligado.classList.remove('selecionado')
     }
     sobremesaescolhido = botaoselecionado.querySelector('.franguinho3 .titulo-frango').innerHTML;
     valor3 = botaoselecionado.querySelector('.valor').innerHTML
     botaoselecionado.classList.add('selecionado')

     sobremesa = botaoselecionado.innerHTML;
    habilitaBotaoContinuar ()
 }
 

 function habilitaBotaoContinuar (){
   if(pratoescolhido && bebidaescolhido && sobremesaescolhido !== undefined){
               const botaoContinuar = document.querySelector('.botaofinal');
               document.querySelector('.botaofinal').disabled = false;
               botaoContinuar.classList.add('botaoverde');
               botaoContinuar.innerHTML = 'Fechar Pedido';   
               
               valortotal = Number(valor1) + Number(valor2) + Number(valor3);
               
           }
   }

function funcaowhatsapp(){
   if(habilitaBotaoContinuar !== undefined ){  
     const nome = prompt('Qual o seu nome?')
     const endereço = prompt('Qual o seu endereço?')
       let encoded = encodeURIComponent(`Olá, gostaria de fazer o pedido:
   - Prato: ${pratoescolhido}
   - Bebida: ${bebidaescolhido}
   - Sobremesa: ${sobremesaescolhido}
   - Total: R$ ${valortotal}

   Nome: ${nome}
   Endereço: ${endereço}`)
       window.open('https://wa.me/5575998741647?text='+encoded)
       
    }

 }
