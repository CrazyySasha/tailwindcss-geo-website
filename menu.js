export const useMenu = (btnSelector, menuSelector, toggledClass) => {

    document.addEventListener('DOMContentLoaded', () => {
        const buttonElement = document.querySelector(btnSelector);
        const bodyElement = document.querySelector('body');
        if (buttonElement && bodyElement) {
            buttonElement.addEventListener('click', () => {
                bodyElement.classList.toggle(toggledClass);
            });
        }
    });
}