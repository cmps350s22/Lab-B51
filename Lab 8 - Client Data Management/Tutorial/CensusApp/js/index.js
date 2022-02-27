// import {CensusRepo} from './repository/census-repo.js'

// const db = new Localbase('census.db')
const addBtn = document.querySelector('#add-btn')
const formElement = document.querySelector('#form')


formElement.addEventListener('submit', addCensus)
//registering your methods

function addCensus(e) {
    e.preventDefault()
    console.log(e.target)
}


function formToObject(form) {
    const formData = new FormData(form)
}
