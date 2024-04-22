'use strict';

// Responsive menu-bar

function menuClick() {
    let x = document.getElementsByClassName("nav-items")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
