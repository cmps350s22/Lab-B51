//initialize the database using localbase
const db = new Localbase('jokes.db')
const collectionName = 'jokes'

export class JokesRepo {
    addJoke(joke) {
        try {
            return db.collection(collectionName).add(joke)
        } catch (e) {
            console.log(e)
        }
    }

    getJoke(id) {
        try {
            return db.collection(collectionName).doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }

    updateJoke(joke) {
        try {
            return db.collection(collectionName).doc({id: joke.id}).update(joke)
        } catch (e) {
            console.log(e)
        }
    }

    getJokes() {
        try {
            return db.collection(collectionName).get()
        } catch (e) {
            console.log(e)
        }
    }

}
















