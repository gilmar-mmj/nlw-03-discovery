//create map
const map = L.map('mapid').setView([-28.6969279,-49.386222], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    //remove icon from
    marker && map.removeLayer(marker);

    //add icon tileLayer
    marker = L.marker([lat,lng], {icon})  
    .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone dda ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo eesta vazio, se sim, nao adicionar no container de imagens
    const input = newFieldContainer.children[0]
    
    if(input.value == "") { 
        return 
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

//deletar campos de imagem vazio, ou apagar caso tenha somente um campo de imagem
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll([".new-upload"])

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

//selecionar yes ou nao
function toggleSelect(event) {
    //retirar a class .active (dos botoes)
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"))

    //colocar a class .active nesse bottao clicado
    const button = event.currentTarget
    button.classList.add("active")

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector("[name=open_on_weekends]")
    
    //verificar se sim ou nao
    input.value = button.dataset.value
}