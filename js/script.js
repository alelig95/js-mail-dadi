var email = prompt('Qual è il tuo indirizzo e-mail?');
var listaMail = ['alex@live.it', 'mimmo@hotmail.it', 'saro@gmail.com'];
var esitoDelGioco = document.getElementById('esito');

var emailTrovata = false;
for(var i = 0; i < listaMail.length; i++) {
  if (email === listaMail[i]) {
    emailTrovata = true;
  }
}

if(!emailTrovata) {
  alert('Non sei autorizzato ad accedere al gioco.')
} else {
  alert('Puoi giocare! Adesso verranno lanciati i dadi.')

var min = 1;
var max = 6;
var dadoComputer = Math.floor(Math.random() * (max + 1 - min) + min);
var dadoGiocatore = Math.floor(Math.random() * (max + 1 - min) + min);
var numeroComputer = document.getElementById('numero-computer')
  numeroComputer.innerText = 'Il numero del computer è: ' + dadoComputer;
var numeroGiocatore = document.getElementById('numero-giocatore')
 numeroGiocatore.innerText = 'Il tuo numero è: ' + dadoGiocatore;
if(dadoGiocatore < dadoComputer) {
  esitoDelGioco.innerText = 'Hai perso.'
} else if(dadoGiocatore > dadoComputer) {
  esitoDelGioco.innerText = 'Hai vinto!'
} else {
  esitoDelGioco.innerText = 'Pareggio!'
}

}
