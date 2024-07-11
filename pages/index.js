function selectLanguage(language) {
    document.getElementById('selected-language').textContent = language;
}
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    let headerMenu = document.querySelector('.header__menu');
    let loginButton = document.querySelector('.login');
    let signupButton = document.querySelector('.signup');
    let body = document.body;

    headerMenu.classList.toggle('open');
    body.classList.toggle('no-scroll');

    if (window.innerWidth < 988) {
        if (headerMenu.classList.contains('open')) {
            loginButton.style.display = 'block';
            signupButton.style.display = 'block';
        } else {
            loginButton.style.display = 'none';
            signupButton.style.display = 'none';
        }
    }
});

window.addEventListener('resize', function () {
    let loginButton = document.querySelector('.login');
    let signupButton = document.querySelector('.signup');

    if (window.innerWidth >= 988) {
        loginButton.style.display = 'block';
        signupButton.style.display = 'block';
    } else {
        let headerMenu = document.querySelector('.header__menu');
        if (headerMenu.classList.contains('open')) {
            loginButton.style.display = 'block';
            signupButton.style.display = 'block';
        } else {
            loginButton.style.display = 'none';
            signupButton.style.display = 'none';
        }
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll__el');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            elements.forEach(el => el.classList.remove('activeBtn'));
            element.classList.add('activeBtn');
        })
    })
})