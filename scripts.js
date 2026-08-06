let expandables = document.querySelectorAll('.expandable');

let projects_container = expandables[0];
let icon = projects_container.children[0];
let personal_projects = projects_container.children[1];
let projects_nav = projects_container.children[2];

personal_projects.addEventListener('click', function () {
    icon.classList.toggle('open');
    projects_nav.classList.toggle('hide');
});
