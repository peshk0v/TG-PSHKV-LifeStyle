document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при загрузке
    const animateElements = document.querySelectorAll('.animate-on-load');
    
    // Запускаем анимацию для каждого элемента
    animateElements.forEach(el => {
        el.style.opacity = '1';
    });
    
    // Анимация при скролле
    const scrollElements = document.querySelectorAll('.card, .interest-item, .project-highlight');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('animate-scroll');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Добавляем обработчик скролла
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Инициализируем анимацию при загрузке
    handleScrollAnimation();
});