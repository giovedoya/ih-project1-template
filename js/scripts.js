window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const tryAgainButton = document.getElementById('try-again');
  const tryAgainButtonWin = document.getElementById('try-again-win');
  
  startButton.onclick = function () {
    startPage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
    
  }
tryAgainButton.addEventListener('click', function(){
  location.reload()
})
tryAgainButtonWin.addEventListener('click', function(){
  location.reload()
}) 
}