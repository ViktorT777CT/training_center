// Находим элементы
const innerElement = document.querySelector('.menu-item__submenu');
const externalElement = document.querySelector('.overlay');
const externalBurger = document.querySelector('.burger');

// Добавляем обработчик события наведения
innerElement.addEventListener('mouseenter', function () {
    externalElement.classList.add('active'); // Добавляем класс
});

// Добавляем обработчик события ухода мыши
innerElement.addEventListener('mouseleave', function () {
    externalElement.classList.remove('active'); // Убираем класс
});
