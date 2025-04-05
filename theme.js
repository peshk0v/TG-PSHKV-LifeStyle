document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeOverlay = document.getElementById("theme-overlay");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Устанавливаем тему в зависимости от предпочтений браузера
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
        document.documentElement.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.add("light-theme");
        localStorage.setItem("theme", "light");
    }

    // Переключение темы при нажатии на кнопку
    themeToggleButton.addEventListener("click", () => {
        // Активируем анимацию
        themeOverlay.classList.add("active");

        // Переключаем тему после небольшой задержки
        setTimeout(() => {
            if (document.documentElement.classList.contains("light-theme")) {
                document.documentElement.classList.remove("light-theme");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.add("light-theme");
                localStorage.setItem("theme", "light");
            }

            // Убираем анимацию
            setTimeout(() => {
                themeOverlay.classList.remove("active");
            }, 500); // Длительность анимации совпадает с CSS
        }, 250); // Задержка перед переключением темы
    });
});