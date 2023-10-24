import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'o';

const changePlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x';
    document.querySelector('.game__player-sign').src = 'img/cross.svg';
  } else if (currentPlayer === 'x') {
    currentPlayer = 'o';
    document.querySelector('.game__player-sign').src = 'img/circle.svg';
  }
};

// Úkol: Piškvorky 4/5:
// pridanie event.target.value podľa currentPlayer do funkcie selectBtn
// pridanie const herniPole a funkciu, ktorá pridáva value daného buttnu do tohto poľa
// pridanie const vitez a funkcie findWinner

const selectBtn = async (event) => {
  if (currentPlayer === 'o') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;

    event.target.value = currentPlayer;
  } else if (currentPlayer === 'x') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;

    event.target.value = currentPlayer;
  }

  const herniPole = [];

  const fields = document.querySelectorAll('.game__board-btn');
  fields.forEach((buttonSign) => {
    let hodnota = buttonSign.value;
    if (hodnota === '') {
      hodnota = '_';
    }
    herniPole.push(hodnota);
    // console.log(herniPole);
  });

  const vitez = findWinner(herniPole);
  if (vitez === 'o' || vitez === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`); // Vyhrál hráč se symbolem o.
      location.reload();
    }, 200);
  } else if (vitez === 'tie') {
    alert(`Remíza`);
  }

  //Úkol: Piškvorky 5/5
  //odešli požadavek na API a získej navrhovaný tah. API běží na adrese https://piskvorky.czechitas-podklady.cz/api/suggest-next-move a očekává metodu POST, hlavičku Content-type: application/json a tělo ve formátu JSON. V JSONu musí být objekt s vlastností board, kde hodnota je stejné pole, jako ve volání funkce findWinner z předchozího úkolu. Objekt dále musí obsahovat vlastnost player s hodnotou 'x' vzhledem k tomu, že chceme návrh tahu pro křížek.

  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        board: herniPole,
        player: 'x',
      }),
    },
  );

  const data = await response.json();
  // console.log(data);
  const { x, y } = data.position;
  // x bude 0 a y bude 1, protože to je jediné volné políčko. x 0 odpovídá prvnímu sloupci a y 1 druhému řádku.
  const field = fields[x + y * 10];
  // Najde políčko na příslušné pozici.
  if (currentPlayer === 'x') {
    field.click();
  }
  // Simuluje kliknutí. Spustí událost `click` na políčku.
};

const btn = document.querySelectorAll('.game__board-btn');
btn.forEach((button) => {
  button.addEventListener('click', selectBtn);
  button.addEventListener('click', changePlayer);
});

//bonus ukol 3/5

document.querySelector('.start-play').addEventListener('click', (event) => {
  const answer = confirm('Opravdu chceš začít znovu?');
  if (answer !== true) {
    event.preventDefault();
  }
});
