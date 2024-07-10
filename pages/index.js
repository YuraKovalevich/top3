function selectLanguage(language) {
    document.getElementById('selected-language').textContent = language;
}
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    var headerMenu = document.querySelector('.header__menu');
    var loginButton = document.querySelector('.login');
    var signupButton = document.querySelector('.signup');
    var body = document.body;

    headerMenu.classList.toggle('open');
    body.classList.toggle('no-scroll');

    // Показываем или скрываем кнопки login и signup в зависимости от состояния бургер меню
    if (headerMenu.classList.contains('open')) {
        loginButton.style.display = 'block';
        signupButton.style.display = 'block';
    } else {
        // Скрываем кнопки, если бургер меню закрыто
        loginButton.style.display = 'none';
        signupButton.style.display = 'none';
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