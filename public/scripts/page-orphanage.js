const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid', options).setView([-3.7413418,-38.5109022], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29.68],
    popupAnchor: [170, 2],
})


L
    .marker([-3.7413418,-38.5109022], { icon })
    .addTo(map)
    
    
/* image gallery */

function selectImage(event) {
    const button = event.currentTarget
    
    //remove all active classes
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //select image
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //update image's container
    imageContainer.src = image.src
    //add active class to the button selected
    button.classList.add('active')
}