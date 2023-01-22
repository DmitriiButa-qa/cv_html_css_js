/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Готовьсь, цельсь, стреляй! (Введи значение от 0 до 6):");
    if (guess < 0 || guess > 6) {
       alert("Пожалуйста, введи корректное значение");
    } else {
      guesses = guesses + 1;

      if (guess == location1 || guess == location2 || guess == location3) {
      alert("Попал!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Ты потопил мой корабль!");
      }
   } else {
    alert("Промазал");
   }
   }
}
var stats = "Тебе понадобилось " + guesses + " попыток, чтобы потопить мой корабль, " +
    "твоя меткость - " + (3/guesses);
alert(stats);

})
