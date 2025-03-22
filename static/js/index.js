const FIRST_CARD = "1";
const LAST_CARD = "2";


/**
 * @param {string} id
 */
function changeCard(id) {
    const current = document.querySelector(".card.focus");
    if (current != null)
        current.classList.remove("focus");
    const card = document.getElementById(`card-${id}`);
    card.classList.add("focus");

    document.getElementById("prev-button").style = id == FIRST_CARD ? "display: none;" : "";
    document.getElementById("next-button").style = id == LAST_CARD ? "display: none;" : "";
}

window.addEventListener("load", () => {

    window.addEventListener("hashchange", () => {
        const id = location.hash.slice(1);
        if (id.length > 0)
            changeCard(id);
    });

    const id = location.hash.slice(1);
    if (id.length > 0) {
        changeCard(id);
    } else {
        if (document.querySelector(".card.focus") == null)
            document.getElementById("card-"+FIRST_CARD).classList.add("focus");
        document.getElementById("prev-button").style = "display: none;";
        document.getElementById("next-button").style = "";
    }

    document.getElementById("foreground-container").style = "animation: foreground-fade-in 0.5s ease-out;";

    document.getElementById("prev-button").addEventListener("click", () => {
        const id = location.hash.slice(1);
        location.hash = Number(id.length > 0 ? id : FIRST_CARD) - 1;
    });

    document.getElementById("next-button").addEventListener("click", () => {
        const id = location.hash.slice(1);
        location.hash = Number(id.length > 0 ? id : FIRST_CARD) + 1;
    });
});