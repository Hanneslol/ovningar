import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { Person } from './Person.js'
import { createHtmlForPerson } from './htmlHelper.js'

window.onload = () => {

  const person = new Person("Hannes Wallin", "187cm", "75kg", "blue")
  const person2 = new Person("Magnus Uggla", "154cm", "30kg", "brown")
  const person3 = new Person("Mr Cool", "182cm", "100kg", "blue")
  const person4 = new Person("Kevin Kevinson", "176cm", "65kg", "green")
  const person5 = new Person("Calvin Klein", "132cm", "88kg", "blue")


  const persons = [person, person2, person3, person4, person5]

  console.log(persons)

  for (let i = 0; i < persons.length; i++) {
    createHtmlForPerson(persons[i]);

  }
}
