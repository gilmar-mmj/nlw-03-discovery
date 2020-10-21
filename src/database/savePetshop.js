function savePetshop(db, petshop) {
  return db.run(`
        INSERT INTO petshops (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${petshop.lat}",
            "${petshop.lng}",
            "${petshop.name}",
            "${petshop.about}",
            "${petshop.whatsapp}",
            "${petshop.images}",
            "${petshop.instructions}",
            "${petshop.opening_hours}",
            "${petshop.open_on_weekends}"
        );
  `);
}

module.exports = savePetshop;