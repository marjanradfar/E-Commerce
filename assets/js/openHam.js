const hamburgerIcon = document.querySelector(".hamburgerIcon");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
let isOpen = false;
hamburgerIcon.addEventListener('click', function () {
    isOpen = !isOpen;
    if (isOpen) {
        const img = document.querySelector(".hamburgerIcon");
        img.src = "../assets/image/icon/close.svg";
        hamburgerMenu.classList.add("show-menu");

    } else {
        const img = document.querySelector(".hamburgerIcon");
        img.src = "../assets/image/icon/ham.svg";
        hamburgerMenu.classList.remove("show-menu");

    }

})
