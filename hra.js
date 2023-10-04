let currentPlayer = 'circle';

const changePlayer = () => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    document.querySelector('.game__player-sign').src = 'img/cross.svg';
  } else if (currentPlayer === 'cross') {
    currentPlayer = 'circle';
    document.querySelector('.game__player-sign').src = 'img/circle.svg';
  }
};

const selectBtn = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
  }
};

const btn = document.querySelectorAll('.game__board-btn');
btn.forEach((button) => {
  button.addEventListener('click', selectBtn);
  button.addEventListener('click', changePlayer);
});
