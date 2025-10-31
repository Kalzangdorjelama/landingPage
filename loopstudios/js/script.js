const menu = document.getElementById('menu')
// console.log(menu)

const hero = document.querySelector('.hero')
console.log(hero)

const openInfoSection = document.getElementById('open-info-section')
// console.log(openInfoSection)

const hora = document.getElementsByClassName('hora')
console.log(hora)

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    openInfoSection.classList.toggle('hidden')
    for (let i = 0; i < hora.length; i++) {
        hora[i].classList.toggle('hidden');
    }
    hero.classList.toggle('hero')
})