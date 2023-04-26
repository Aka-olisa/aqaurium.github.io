
function drawMap(){
    // function callback to draw the map on the page
    var streetLocation = {lat: 38.920161, lng: -77.041825}
    var map = new google.maps.Map(document.getElementById('googleMapDiv'), {
    zoom: 19,
    center: streetLocation,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    mapId: "85dc37aae77433f4"
    });

    var marker = new google.maps.Marker({
    position: streetLocation,
    map: map,
    title: "Nexus Aquarium",
    animation: google.maps.Animation.BOUNCE
    });

    map.requestFullscreen();

}