const map = L.map('mapid').setView([-3.7413418,-38.5109022], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29.68],
    popupAnchor: [170, 2],
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orpahange.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

L
    .marker([-3.7413418,-38.5109022], { icon })
    .addTo(map)
    .bindPopup(popup)
    
