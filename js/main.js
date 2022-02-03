console.log("No Js Errors");



// Navbar Toggler
let toggler = document.getElementById('nav-toggler');
toggler.addEventListener('click', function () {
    toggler.classList.toggle('active');
});


// Header Active
let mainHeader = document.getElementById('main-header');

window.addEventListener('scroll', function (e) {
    let scrollTop = window.pageYOffset;

    if (scrollTop > 120) {
        mainHeader.classList.add('active');
    } else {
        mainHeader.classList.remove('active');
    }
});

