document.querySelector("#show-apps-circle").addEventListener("click", (event) => {
    const googleApps = document.querySelector(".google-apps-IKASP");
    googleApps.classList.toggle("hidden");
    if (googleApps.classList.contains("hidden")) {
        googleApps.setAttribute("aria-expanded", "false");
        document.querySelector("#show-apps-circle").setAttribute("aria-expanded", "false");
    } else {
        googleApps.setAttribute("aria-expanded", "true");
        document.querySelector("#show-apps-circle").setAttribute("aria-expanded", "true");
    }
})