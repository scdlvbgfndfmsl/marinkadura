const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const catImage = document.getElementById('catImage');
const question = document.getElementById('question');

const noButtonPhrases = [
  "Ты уверенна??",
  "Подумай получше",
  "Я буду плаке плаке😭",
  "Все, я иду плакать"
];

const noButtonImages = [
  "images/cat3.jpg",
  "images/cat4.jpg",
  "images/cat5.jpg",
  "images/cat6.jpg"
];

let phraseIndex = 0;

noButton.addEventListener('click', function() {
  if (phraseIndex < noButtonPhrases.length) {
    noButton.innerHTML = noButtonPhrases[phraseIndex];
    catImage.src = noButtonImages[phraseIndex];
    phraseIndex++;
  }
  if (phraseIndex === noButtonPhrases.length) {
    // Все фразы для кнопки "Нет" закончились.
    // Меняем текст кнопки "Нет" на "Да"
    noButton.innerHTML = "Да";
    // Скрываем кнопку "Да" (опционально, если ты не хочешь, чтобы было две кнопки "Да")
    // yesButton.style.display = "none";

    // Дополнительно: Если пользователь снова нажмет на кнопку "Да" (которая раньше была кнопкой "Нет"),
    // можно показать финальную картинку и текст
    noButton.addEventListener('click', function() {
      catImage.src = "images/cat7.jpg";
      question.innerHTML = "УРАААА!! :33";
      yesButton.style.display = "none"; // Скрываем кнопку "Да"
      noButton.style.display = "none"; // Скрываем кнопку "Нет"
    });
  }
});

yesButton.addEventListener('click', function() {
  catImage.src = "images/cat7.jpg";
  question.innerHTML = "УРАААА!! :33";
  yesButton.style.display = "none"; // Скрываем кнопку "Да"
  noButton.style.display = "none"; // Скрываем кнопку "Нет"
});