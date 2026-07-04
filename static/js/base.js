
const TOAST_APPEAR_DUR = 0.75;
const TOAST_DISAPPEAR_DUR = 0.75;

/**
 * @param {string} text
 * @param {number} seconds
 * @param {HTMLElement} dest
 */
function newToast(text, seconds, dest) {
    const toastContainer = document.createElement("div");
    const toastText = document.createElement("span");

    toastContainer.classList.add("toast");
    toastText.innerText = text;

    toastContainer.appendChild(toastText);
    dest.appendChild(toastContainer);

    toastContainer.style.animation = `toast-appear ${TOAST_APPEAR_DUR}s ease-out`;
    
    let timeout = setTimeout(() => {
        toastContainer.style.animation = "";
        timeout = setTimeout(() => {
            toastContainer.classList.add("disappear");
            toastContainer.style.animation = `toast-disappear ${TOAST_DISAPPEAR_DUR}s ease-in`;
            timeout = setTimeout(() => {
                toastContainer.remove();
            }, TOAST_DISAPPEAR_DUR * 1000);
        }, seconds * 1000);
    }, TOAST_APPEAR_DUR * 1000);

    toastContainer.addEventListener("click", () => {
        clearTimeout(timeout);
        toastContainer.remove();
    });
}
