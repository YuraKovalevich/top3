function selectLanguage(language) {
    document.getElementById('selected-language').textContent = language;
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll__el');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            elements.forEach(el => el.classList.remove('active'));
            element.classList.add('active');
        })
    })
})