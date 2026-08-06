let expandables = document.querySelectorAll('.expandable');

let project_nav = expandables[0];
let projects = document.querySelector('#projects');
project_nav.addEventListener('click', function () {
    projects.classList.toggle('hide');
});
