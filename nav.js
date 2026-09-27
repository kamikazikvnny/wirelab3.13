/* =========================================================
   WIRELAB NAVBAR
   LOAD SAVED PROFILE ICON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbarProfile =
        document.getElementById("navbar-profile");

    const savedIcon =
        localStorage.getItem("wirelabProfileIcon");

    if (
        savedIcon &&
        navbarProfile
    ) {
        navbarProfile.innerHTML =
            `<img src="${savedIcon}" alt="Profile">`;
    }

});