window.addEventListener("load", async () => {
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", () => {
        const t = setTimeout(() => {
            window.location = document.referrer;
        }, 100);
        window.addEventListener("beforeunload", () => {
            clearTimeout(t);
        });
        const f = () => {
            clearTimeout(t);
        };
        if (document.referrer) {
            history.back();
        } else {
            window.location = "/";
        }
    });
});