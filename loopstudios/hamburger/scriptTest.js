const hero = document.getElementsByClassName('hero')
// console.log(hero)

const openInfoSection = document.getElementById('open-info-section')
// console.log(openInfoSection)

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    openInfoSection.classList.toggle('hidden')
})