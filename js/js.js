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
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion__header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordion = this.parentElement;
            const content = accordion.querySelector('.accordion__content');
            const iconHorizontal = this.querySelector('.accordion__toggle svg .horizontal');
            const icon = this.querySelector('.accordion__toggle svg');

            // Переключаем состояние текущего аккордеона
            content.classList.toggle('open');

            // Управляем видимостью горизонтальной линии
            if (content.classList.contains('open')) {
                iconHorizontal.style.opacity = '0'; // Скрываем горизонтальную линию
                icon.style.transform = 'rotate(90deg)';
            } else {
                iconHorizontal.style.opacity = '1'; // Показываем горизонтальную линию
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    const block = document.querySelector(".wrap__animation");
    const block2 = document.querySelector(".wrap__animation-2");
    const block3 = document.querySelector(".wrap__animation-3");
    const lists = document.querySelectorAll(".wrap__animation-block, .wrap__animation-block-2, .wrap__animation-block-3");

    // Функция для запуска анимации
    function startAnimation(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Добавляем класс с анимацией

                // Анимация для каждого блока с задержкой
                lists.forEach((list, index) => {
                    setTimeout(() => {
                        list.classList.add("visible");
                    }, index * 200); // Задержка 200 мс между блоками
                });

                observer.unobserve(entry.target); // Останавливаем наблюдение после запуска
            }
        });
    }

    // Настройки Intersection Observer
    const options = {
        root: null, // Отслеживаем относительно viewport
        threshold: 0.5, // Анимация запустится, когда 50% элемента будет видно
    };

    // Создаем наблюдатель
    const observer = new IntersectionObserver(startAnimation, options);

    // Начинаем наблюдение за блоком
    observer.observe(block);
    observer.observe(block2);
    observer.observe(block3);




});