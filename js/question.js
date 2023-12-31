// Находим кнопку "Показать"
const showButton = document.querySelector('.show-btn');

// Находим элемент summary внутри details
const summary = document.querySelector('details summary');

// Находим блок с текстом card-plan
const cardPlan = document.querySelector('.card__summary');

// Добавляем обработчик события на клик по кнопке
showButton.addEventListener('click', function() {
  // Проверяем, открыт ли блок card-plan
  const isOpen = cardPlan.style.display === 'block';

  // Если блок уже открыт, скрываем его
  if (isOpen) {
    cardPlan.style.display = 'none';
    showButton.innerHTML = '<img src="img/Group 69.svg" alt=""><p>Показать</p>';
  } else {
    // Если блок закрыт, открываем его
    cardPlan.style.display = 'block';
    showButton.innerHTML = '<img src="img/Group 69.svg" alt=""><p>Скрыть</p>';
  }
});

// Добавляем обработчик события на клик по элементу summary
summary.addEventListener('click', function() {
  // Проверяем, открыт ли блок card-plan
  const isOpen = cardPlan.style.display === 'block';

  // Если блок уже открыт, меняем текст кнопки на "Показать"
  if (isOpen) {
    showButton.innerHTML = '<img src="img/Group 69.svg" alt=""><p>Скрыть</p>';
  } else {
    // Если блок закрыт, меняем текст кнопки на "Скрыть"
    // showButton.innerHTML = '<img src="img/Group 69.svg" alt=""><p>Скрыть</p>';
  }
});