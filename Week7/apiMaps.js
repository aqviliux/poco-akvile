//I need to add my card for google cloud
// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }

var map = tt.map({
    key: "btE81SYLzyAcZycC1aWnHfZ30Q8WWNhh",
    container: "map",
    //dragPan: !isMobileOrTablet(),
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());
