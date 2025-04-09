
/* Egy változóba tároljunk el egy szöveget, írjuk ki előugró ablakba! */
var szo=window.prompt('Írj be egy szót: ' );
alert(szo);

/*   Egy változóba kérjünk be egy szót, írjuk ki a weboldalra!*/
var szo2=window.prompt('Írj be még egy szót: ' );
document.write(szo2);

/*   Egy változóba kérjünk be egy nevet, írjuk ki a konzolra a „Hello név” szöveget!*/ 
var nev=window.prompt('Írj be egy nevet: ');
console.log('Hello'+' '+nev);

/*   Egy változóba kérjünk be egy szót, írjuk ki a weboldalra a megadott szó hosszát!*/
var szo3=window.prompt('Írj be egy szót: ');
document.write(szo3.length);

/*  Egy változóba kérjünk be egy szót, írjuk ki előugró ablakba a szót nagybetűsen/kisbetűsen! */
var szo4=window.prompt('Írj be még egy szót: ' );
alert(szo4 .toUpperCase());
alert(szo4 .toLowerCase());

/*   Egy változóba kérjünk be egy szót, írjuk ki a weboldalra a szó 3. karakterét!*/
var szo5=window.prompt('Írj be egy szót: ' );
document.write(szo5[2]);

/*  Egy változóba kérjünk be egy szót, írjuk ki a konzolra a szó 1.karakterét nagybetűsen!*/
var szo6=window.prompt('Írj be egy szót: ');
console.log(szo6[2].toUpperCase());

/*   Két változóba kérjünk be 2 szót, írjuk ki a weboldalra összefűzve a két szót, szóközzel elválasztva!*/
var szo7=window.prompt('Írj be egy szót: ' );
var szo8=window.prompt('Írj be még egy szót: ' );
document.write(szo7+' '+szo8);

/*Egy változóba kérjünk be egy számot, írjuk ki a szám 2-szeresét a weboldalra!  */
var szam=parseInt(window.prompt('Írj be egy számot: '));
document.write(szam*2);

/*  Egy változóba kérjünk be egy szót, és egy számot, írjuk ki a konzolra a
megadott számadik karakterét a szónak!*/
var szo9=window.prompt('Írj be egy szót: ' );
var szam2=parseInt(window.prompt('Írj be egy számot: '));
console.log(szo9[szam2]);

/* Egy változóba kérjünk be egy számot, írjuk ki az 1-gyel növelt értékét a
weboldalra, az 1-gyel csökkentett értékét a konzolra! */
var szam2=parseInt(window.prompt("Kérek egy másik számot: "));
document.write(szam2++);
console.log(szam2--);

/* Két változóba kérjünk be 2 számot, weboldalra írjuk ki a két szám szorzatát,
konzolra a különbségét, előugró ablakba a hányadosukat, weboldalra az osztási
maradékot! */
console.log("A számok osztása maradékkal: ",szam%sam);


