const db = new Localbase('census.db')

class CensusRepo {
    addCensus(census) {
        try {
            return db.collection('census').add(census)
        } catch (e) {
            console.log(e)
        }
    }

    updateCensus(updatedCensus) {
        try {
            return db.collection('census').doc({id: census.id}).update(updatedCensus)
        } catch (e) {
            console.log(e)
        }
    }

    deleteCensus(id) {
        try {
            return db.collection('census').doc({id}).delete()
        } catch (e) {
            console.log(e)
        }
    }

    getCensusById(id) {
        try {
            return db.collection('census').doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }

    getAllCensus(noOfCensus) {
        try {
            if (!noOfCensus) return db.collection('census').get()

            return db.collection('census').limit(noOfCensus).get()
        } catch (e) {
            console.log(e)
        }
    }
}








