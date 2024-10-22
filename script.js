console.log("hello console");

/*
Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

Bonus 

Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
e così via...
Per fare questo bonus potremmo aver bisogno di del metodo string.includes()


Inizio
  lampadina = getElementById('lampadina')
  button = getElementById('accendi')

  button.addEventListener('click', function() {
    Se lampadina.src è "white_lamp.png" allora
      Cambia lampadina.src a "yellow_lamp.png"
      Cambia il testo di button a "Spegni"
    Altrimenti
      Cambia lampadina.src a "white_lamp.png"
      Cambia il testo di button a "Accendi"
    Fine

*/

const lamp = document.getElementById('lamp');
const switchLamp = document.getElementById('switch-lamp');

switchLamp.addEventListener('click', function () {

  if (lamp.src.includes('white_lamp.png')) {
    lamp.src = './img/yellow_lamp.png';
    switchLamp.textContent = 'switch off';
  } else {
    lamp.src = './img/white_lamp.png';
    switchLamp.textContent = 'switch on';
  }
});
