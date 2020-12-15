var email = prompt('Qual è il tuo indirizzo e-mail?');
var verificaAccesso = document.getElementById('accesso');
var listaMail = ['pippo', 'mimmo@hotmail.it', 'saro@live.it'];

for(var i = 0; i < listaMail.length; i++) {
  if(listaMail[i] === email) {
    verificaAccesso.innerText = 'Accesso consentito. Puoi giocare a dadi!'
  } else
      verificaAccesso.innerText = 'Tu non puoi passare!'
}
var min = 1;
var max = 6;
var dado = Math.floor(Math.random() * (max + 1 - min) + min)
console.log(dado)
