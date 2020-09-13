

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosjugador = 0;
    puntoscomputadora = 0;
    puntosminimos = 0;
    turnocomputadora = 0;


//referencias 
const btnpedir = document.querySelector('#btnpedir');
const btndetener = document.querySelector('#btndetener');


const divcartasjugador = document.querySelector('#jugador-cartas');
const divcartascomputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

console.log( btnpedir);
const crearDeck =() =>{

    for( let i = 2; i <= 10; i++){
     for( let tipo of tipos){
        deck.push( i + tipo);
    }
}

 for( let tipo of tipos){
for( let esp of especiales){
    deck.push( esp + tipo);
}

 }
 console.log( deck);
 deck = _.shuffle( deck );
 console.log( deck);
 return deck; 
}
  crearDeck();

  // tomar carta
  const pedircarta = () => {

   if (deck.length ===0){
     throw 'No hay mas cartas';

   }



    const carta = deck.pop();


   console.log(deck);
    console.log(carta);
    return carta;




  }
   //deck =[];
 pedircarta();

 const valorcarta = ( carta ) => {
const valor = carta.substring(0, carta.length - 1);
   

 return ( isNaN( valor ) ) ?
        ( valor === 'A' ) ? 11 : 10
           : valor * 1;

 }
btnpedir.addEventListener('click', () => {

const carta = pedircarta();

turnocomputadora = puntosjugador + valorcarta( carta );
puntosjugador = puntosjugador + valorcarta( carta );
puntosHTML[0].innerText = puntosjugador;

//<img  class="carta" src="cartas/10S.png">

const imgcarta = document.createElement('img');
imgcarta.src = `cartas/${ carta }.png`;
imgcarta.classList.add('carta');
divcartasjugador.append( imgcarta );


if( puntosjugador > 21 ) {
console.warn('la cagaste');
btnpedir.disabled = true;
btndetener.disabled = true;
turnocomputadora( puntosjugador);



} else if (puntosjugador ===21 ){
    console.log('Ganaste')
    btnpedir.disabled = true;
    btndetener.disabled = true;
    turnocomputadora( puntosjugador);
}






 });
 do{
    const turnocomputadora = (puntosminimos) => {
       puntoscomputadora = puntoscomputadora + valorcarta( carta );
       puntosHTML[1].innerText = puntoscomputadora;
       
       //<img  class="carta" src="cartas/10S.png">
       
       const imgcarta = document.createElement('img');
       imgcarta.src = `cartas/${ carta }.png`;
       imgcarta.classList.add('carta');
       divcartascomputadora.append( imgcarta );
   
       if(puntosminimos > 21){
           
       }
    }
    }while ( ( puntoscomputadora < puntosminimos) && (puntosminimos <= 21));
   setTimeout(() => {
   
    if (puntoscomputadora === puntosminimos){
   alert('nadie Gana');
   
   }else if( puntosminimos < 21) {
   alert('Computadora gana');
   
   }else if (puntoscomputadora > 21){
       alert('JAJAJA');
   }
   }, 10 );

   btndetener.addEventListener('click', () =>{
   btnpedir.disabled = true;
   btndetener.disabled = true;

   turnocomputadora( puntosjugador);



 });

 btnnuevo.addEventListener('click', () =>{
 
   console.clear();
     deck = [];
     deck = crearDeck();
    puntosjugador = 0;
    puntoscomputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divcartascomputadora.innerHTML = '';
    divcartasjugador.innerHTML = '';

    btnpedir.disabled = false;
    btndetener.disabled = false;
 });




