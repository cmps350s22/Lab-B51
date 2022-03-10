import {JokesRepo} from "./repo/repo-js.js";

const jokesRepo = new JokesRepo();

//we need to load the first page and one joke from the start

window.onload = async () => {
    //we need to load the first page and one joke from the start
    await loadPage('joke-loader.html')
    await getNewJoke()

    //add all the methods to the window, those that will be called from nav bar and also, from the html
    window.loadPage = loadPage
    window.getNewJoke = getNewJoke
    window.saveCurrentJoke = saveCurrentJoke
    window.showSavedJoke = showSavedJoke
    window.editJoke = editJoke

}
//This is a common element in both pages so it is okay to query select here
const mainContent = document.querySelector('#main')

async function getNewJoke() {
    const data = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    const joke = await data.json()
    const newJokeElement = document.querySelector('#new-joke')

    if (joke.setup != undefined) {
        //we save the current joke in the localStorage, so when we navigate, we can easily read it back from there
        localStorage.setItem('currentJoke', JSON.stringify(joke))

        newJokeElement.innerHTML = `
        <h1>${joke.category} Joke</h1>
        <p>${joke.setup}</p>
        <p>${joke.delivery} 😂</p>
        <div class="buttons">
            <button onclick="getNewJoke()" class="btn btn-secondary">Load New Joke</button>
            <button onclick="saveCurrentJoke()" class="btn btn-secondary">Save This Joke</button>
            <button onclick="showSavedJoke()" class="btn btn-secondary">Show Saved Joke</button>
        </div>
    `
    } else {
        newJokeElement.innerHTML = `Refresh the page again as some of the jokes are empty`
    }
}

async function saveCurrentJoke() {
    if (localStorage.currentJoke != undefined)
        jokesRepo.addJoke(JSON.parse(localStorage.getItem('currentJoke')))
}

async function showSavedJoke() {
    const jokes = await jokesRepo.getJokes()
    const savedJokesArea = document.querySelector('#saved-jokes')
    const jokesListItems = jokes.map(joke => jokeToCard(joke)).join(' ')
    savedJokesArea.innerHTML = `
        <div class="jokes">
              ${jokesListItems}
        </div>
    `
}

function jokeToCard(joke) {
    return `
        <div class="card">
            <h1>${joke.category} Joke</h1>
            <p>${joke.setup}</p>
            <p>${joke.delivery} 😂</p>
            <button onclick="editJoke(${joke.id})" class="btn btn-secondary">Edit</button>
        </div>
    `
}

//Editing a single joke
async function editJoke(id) {
    const joke = await jokesRepo.getJoke(id)
    await loadPage('joke-editor.html')

    //after we load the form we can query select the form, before that we will get an error
    const form = document.querySelector('#form')

    //This will populate the data into the form, you do not need to query select one by one
    //You can do it with a loop
    for (const [key, value] of Object.entries(joke))
        if (form.elements[key] != null)
            form.elements[key].value = value

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const joke = formToObject(e.target)
        //we need to add the ID again, because the form does not contain an ID
        joke.id = id
        await jokesRepo.updateJoke(joke)

        //Load the new page , 1 joke and also show all the previously saved jokes
        await loadPage('joke-loader.html')
        await getNewJoke()
        await showSavedJoke()
    })

}

function formToObject(form) {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data;
}

async function loadPage(pageName) {
    const pageContent = await fetch(`pages/${pageName}`)
    mainContent.innerHTML = await pageContent.text()
}
