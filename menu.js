export const useMenu = (btnSelector, menuSelector, toggledClass) => {

    document.addEventListener('DOMContentLoaded', () => {
        const buttonElement = document.querySelector(btnSelector);
        const menuElement = document.querySelector(menuSelector);
        buttonElement.addEventListener('click', () => {
            menuElement.classList.toggle(toggledClass);
        });

    });
}