import { people } from '../data/people.js'
import { removeChildren, getLastNumber, addStarField} from '../util/index.js'

/* NAV */


const nav = document.querySelector('nav')

const starshipsButton = document.createElement('button')
starshipsButton.innerHTML = '<a href="../sw-starships">STARSHIPS</a>'
nav.appendChild(starshipsButton)


const charButton = document.createElement('button')
charButton.innerHTML = '<a href="../star-wars-characters">CHARACTERS</a>'
nav.appendChild(charButton)

const filmsButton = document.createElement('button')
filmsButton.innerHTML = '<a href="../star-wars-films">FILMS</a>'
nav.appendChild(filmsButton)


/* MAIN CONTENT */

const mainContent = document.querySelector('#main')

populateDOM(people)

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)


const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter((person) => person.gender === 'male')

const femaleCharacters = people.filter((person) => person.gender === 'female')

const otherCharacters = people.filter((thing) => {
    if (thing.gender === 'n/a' || 
        thing.gender === 'none' ||
        thing.gender === 'hermaphrodite') {
        return thing
    }
})


maleButton.addEventListener('click', () => populateDOM(maleCharacters))

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))


function populateDOM(characters){
    removeChildren(mainContent)
    characters.forEach(element => {

        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true) // genius level
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
})
}



addStarField(document.querySelector('body'), 1000)