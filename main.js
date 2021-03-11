// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
 function ukazVysledek (a, b){
 document.querySelector("#vysledek").innerHTML = secti(4, 5);}

function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  let gratulace = "Gratulace, právě jsi spustila tuto funkci!";
  let ctverecek = document.querySelector('.ctverecek');
  alert(gratulace);
  console.log(gratulace);
  ctverecek.innerHTML = (gratulace);
  ctverecek.style.width = '380px';
}

function zmenBarvu() {
  document.querySelector('.ctverecek').style.backgroundColor = '#008000';
}

