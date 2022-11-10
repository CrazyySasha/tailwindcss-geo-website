export const useMenu = (btnSelector, menuSelector, toggledClass) => {

    document.addEventListener('DOMContentLoaded', () => {
        const buttonElement = document.querySelector(btnSelector);
        const bodyElement = document.querySelector('body');
        buttonElement.addEventListener('click', () => {
            bodyElement.classList.toggle(toggledClass);
        });

    });
}