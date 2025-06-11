/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const titleChange = document.getElementsByTagName("h1");
  titleChange[0].innerText = "Epicode";
};
changeTitle();
/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  const classTitle = document.getElementsByTagName("h1");
  classTitle[0].classList.add("myHeading");
};
addClassToTitle();
/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  const p = document.querySelectorAll("div p");
  p.forEach((num) => {
    num.innerText = "testo per gli esercizi";
  });
};
changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const a = document.querySelectorAll("body a:not(footer a)");
  a.forEach((link) => {
    link.setAttribute("href", "https://www.google.com");
  });
};
changeUrls();
/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const ul = document.getElementById("secondList");
  const newLi = document.createElement("li");
  newLi.innerText = "4th";
  ul.appendChild(newLi);
};
addToTheSecond();
/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
  const p = document.querySelector("div");
  const addp = document.createElement("p");
  addp.innerText = "Ciao sono il paragrafo dentro il primo p";
  p.appendChild(addp);
};

addParagraph();
/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const ul1 = document.getElementById("firstList");
  ul1.style.display = "none";
};
hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const green = document.querySelectorAll("ul");
  green.forEach((color) => (color.style.backgroundColor = "green"));
};
paintItGreen();
/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const h1 = document.querySelector("h1");
  h1.onclick = () => {
    h1.innerText = h1.innerText.slice(0, -1);
  };
};
makeItClickable();
/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.onclick = () => {
    alert(document.querySelector("footer a").getAttribute("href"));
  };
};
revealFooterLink();
/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.style.width = "100%";
  table.innerHTML = `
    <tr>
      <th>Immagine</th>
      <th>Nome Prodotto</th>
      <th>Quantità</th>
      <th>Prezzo in €</th>
    </tr>`;
  tableArea.appendChild(table);
};
generateTable();
/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {
  const tableArea = document.querySelector("#tableArea table");
  const row = document.createElement("tr");
  const imgCell = document.createElement("td");
  const img = document.createElement("img");
  img.src =
    "https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/FC/FC8FA9B3580612309DD49F83D65719FD.png";
  img.width = 50;
  imgCell.appendChild(img);
  const nomeP = document.createElement("td");
  nomeP.innerText = "Ducati-Panigale";
  const q = document.createElement("td");
  q.innerText = 1;
  const prezzo = document.createElement("td");
  prezzo.innerText = 20000;

  row.appendChild(imgCell);
  row.appendChild(nomeP);
  row.appendChild(q);
  row.appendChild(prezzo);

  tableArea.appendChild(row);
};
addRow();
/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const img = document.querySelectorAll("table img");
  img.forEach((n) => {
    n.style.display = "none";
  });
};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  const random = `rgb ${red}, ${blue}, ${green} `;
  h2 = document.getElementById("changeMyColor");
  h
    h
  }
};
