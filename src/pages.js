const Database = require('./database/db');
const savePetshop = require('./database/savePetshop')

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async petshop(req, res) {
        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM petshops WHERE id = ${id}`)
            const petshop = results[0]

            petshop.images = petshop.images.split(",")
            petshop.firstImage = petshop.images[0]

            if (petshop.open_on_weekends === "0") {
                petshop.open_on_weekends = false
            } else {
                petshop.open_on_weekends = true
            }
            
            return res.render('petshop', { petshop })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
        return res.render('petshop')
    },

    async petshops(req, res) {
        try {
            const db = await Database
            const petshops = await db.all("SELECT * FROM petshops")
            return res.render('petshops', { petshops })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    createpetshop(req, res) {
        return res.render('create-petshop')
    },

    async savePetshop(req, res) {
        const fields = req.body

        //valida se todos os campos foram preenchidos
        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos!') 
        }

        try {
            //salvar um orfanato
            const db = await Database
            await savePetshop(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                imagees: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            //redirecionamento
            return res.redirect('/petshops')
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    }
}