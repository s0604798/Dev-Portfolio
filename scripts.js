//##################################################// MAIN DISPLAY
const display = document.querySelector('#display');
console.log(display);

//##################################################// MAIN NAV
const pages = document.querySelectorAll('.page');

for (let page of pages) {
    let src = page.dataset.src;

    console.log(page);
    console.log(src);

    page.addEventListener('click', function () {
        display.src = src;
    })
}

//##################################################// PROJECT NAV
let expandables = document.querySelectorAll('.expandable');
let projects_container = expandables[0];
let icon = projects_container.children[0];
let personal_projects = projects_container.children[1];
let projects_nav = projects_container.children[2];

personal_projects.addEventListener('click', function () {
    icon.classList.toggle('open');
    projects_nav.classList.toggle('hide');
});
