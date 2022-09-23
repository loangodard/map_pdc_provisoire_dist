export function initMap() {
    // The location of Uluru
    const caen = { lat: 49.182191820170736, lng: -0.37297695948749215 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: caen,
    });
    // remove default shop from google map
    map.setOptions({ styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }] });
    return map;
}
//# sourceMappingURL=initMap.js.map