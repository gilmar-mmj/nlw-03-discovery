//create map
const map = L.map('mapid').setView([-28.6969279,-49.386222], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//ao inves de passar o objeto e chamar petshop.id, petshop.name, etc, pode fazer a destruturacao e usar somente id, name, etc
function addMarker ({id, name, lat, lng}) { 
    //create popup overlay
    const popup = L.popup({
        closebutton: false,
        className: 'map-popup',
        minWidth: 240,
        minheight: 240
    }).setContent(`${name} <a href="petshop?id=${id}"> <img src="/images/arrow-white.svg" > </a>`)
    // isso se chama de template strings = ${} 

    //create and add marker
    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const petshopsSpan = document.querySelectorAll('.petshops span')
petshopsSpan.forEach( span => {
    const petshop = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(petshop)
})