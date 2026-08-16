//##################################################// MAIN DISPLAY

const display = document.querySelector('#display');
let currentPage = document.querySelector('#p-1');

const observer = new IntersectionObserver((entries) => {

    console.log('entries:');
    console.log(entries);
    entries.forEach((entry) => {
        console.log('entry target:');
        console.log(entry.target);
        if (entry.isIntersecting) {
            console.log('element within view');
        } else {
            console.log('element is out of view!');
        }
    });
}, { root: display, rootMargin: '10px', threshold: 0.1 });

let page = {
    displayID: 'p-1',
    displayElement: document.querySelector('#p-1'),

    navID: 'n-1',
    navElement: document.querySelector('#n-1'),
}

let timeout;
let ms = 150;
let lastScroll = display.scrollTop;

display.addEventListener('scroll', function (event) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        timeout = null;

        //logic
        let currentScroll = display.scrollTop;

        if (currentScroll < lastScroll) {
            console.log('up');

            //currentPage = currentPage.previousElementSibling;

        } else if (currentScroll > lastScroll) {
            console.log('down');

            //currentPage = currentPage.nextElementSibling;
        }
        lastScroll = currentScroll;
    }, ms);
});

display.addEventListener('scrollend', function (event) {
    console.log('current page: ');
    console.log(currentPage);
    observer.observe(currentPage);
});

//##################################################// MAIN NAV
const navPages = document.querySelectorAll('.navPage');
for (let navPage of navPages) {

    navPage.addEventListener('click', function (event) {
        const pageID = 'p-' + navPage.id.match(/[0-9]/g)[0];
        const nextPage = document.getElementById(pageID);

        currentPage = nextPage;
        nextPage.scrollIntoView(true);
    });
}

//##################################################// PROJECT NAV
const projects_container = document.querySelector('.expandable').children;
const arrow = projects_container[0]; const projects = projects_container[2];
