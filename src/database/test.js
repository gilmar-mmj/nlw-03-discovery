const Database = require('./db');
const savePetshop = require('./savePetshop')

Database.then(async db => {
    //inserir dado na tabela
    await savePetshop(db, {
        lat: "-28.6955157",
        lng: "-49.3753813",
        name: "Pet Fiel",
        about: "O Pet Fiel está localizado no bairro Pinheirinho em Criciúma e está no mercado cerca de 5 anos.",
        whatsapp: "48999874635",
        images: [
            "https://images.unsplash.com/photo-1602250798140-fb1513d8f6a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603040879066-e7846557bc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha conhecer os animais, eles estão animados por um novo lar.",
        opening_hours: "Horário de atendimento a partir das 8h até 18h",
        open_on_weekends: "0"
    })
            
    // //consultar dados da tabela
    // const selecteedpetshops = await db.all("SELECT * FROM petshops")
    // console.log(selecteedpetshops)

    // //consultar somente um orfanato pelo ID
    // const petshop = await db.all('SELECT * FROM petshops WHERE id = 4')
    // console.log(petshop)

    // //deletar dado da tabela
    // console.log(await db.run("DELETE FROM petshops WHERE id = 5"))
})