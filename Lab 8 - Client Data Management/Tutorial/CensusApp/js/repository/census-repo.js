const db = new Localbase('db')
export class CensusRepo {
    addCensus(census) {
        try {
            return db.collection('census').add(census)
        } catch (e) {
            console.log(e)
        }
    }

    updateCensus(updateCensus) {
        try {
            return db.collection('census').doc({id: updateCensus.id}).update(updateCensus)
        } catch (e) {

        }
    }

    deleteCensus(id) {
        try {
            return db.collection('census').doc({id}).delete()
        } catch (e) {

        }
    }

    getCensusById(id) {
        try {
            return db.collection('census').doc({id}).get()
        } catch (e) {

        }
    }

    getAllCensus(noOfRows) {
        try {
            if (!noOfRows)
                return db.collection('census').get()
            return db.collection('census').limit(noOfRows).get()
        } catch (e) {

        }
    }


}
