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

const selectBtn = (event) => {
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

  document.querySelectorAll('.game__board-btn').forEach((buttonSign) => {
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
