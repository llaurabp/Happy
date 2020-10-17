//create map
const map = L.map("mapid").setView([-3.7413418, -38.5109022], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29.68],
});

let marker;

//create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector("[name=lat]").value = lat
  document.querySelector("[name=lat]").value = lng
  //remove icon
  marker && map.removeLayer(marker)

  // add icon layer to map

  marker = L.marker([lat, lng], { icon }).addTo(map)
})

//add photo field
function addPhotoField() {
  //pegar o #images
  const container = document.querySelector('#images')
  //duplicar .new-images
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //verificar se o campo está vazio, se sim não add
  const input = newFieldContainer.children[0]
  if (input.value == "") {
    return
  }
  //limpar p campo antes de adicionar ao container
  input.value = ""
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return 
    } 
   
    //deletar o campo
    span.parentNode.remove();
}

// select 'yes' or 'no' 
function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
 
    const button = event.currentTarget
    button.classList.add('active')

   
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value


}



