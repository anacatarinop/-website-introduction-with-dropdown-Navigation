const body = document.querySelector("body")

const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

const dropdowns = document.querySelectorAll(".dropdown");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

const handleToggle = (toggle, target) => {
    const visibility = target.getAttribute("data-visible");
    if (visibility === "false"){
        target.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded", true);
        if(target.className === "primary-nav"){
            body.classList.toggle('active');
        }
    }
    else{
        target.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expanded", false);
        if(target.className === "primary-nav"){
            body.classList.toggle('active');
        }
    }
}

navToggle.addEventListener('click', () => {
    handleToggle(navToggle, nav)
});

dropdownToggles.forEach((toggle, i) => {
    toggle.addEventListener('click', () => {
        handleToggle(toggle, dropdowns[i])
    })
})