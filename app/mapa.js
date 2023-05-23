window.onload = function (){
  L.mapquest.key = 'wYDUeK7KYoKpg2LAjcr08mQ4M5ntC5fv';

  L.mapquest.geocoding().geocode({
                street: 'Payró 871',
                city: 'Tandil, Provincia de Buenos Aires',
                state: 'Estado',
                postalCode: 'B7000'  
            }, cMap);
  function cMap(error, response){
    var location = response.results[0].locations[0];
    var latLng = location.displayLatLng;
    var map = L.mapquest.map('map', {
      center: latLng,
    layers: L.mapquest.tileLayer('map'),
    zoom: 17  
    });
    map.addControl(L.mapquest.control());
    L.mapquest.textMarker(latLng,{

        text: 'Lo Nuestro',
        subtext: 'Payro 871, Tandil, Provincia de Buenos Aires ',
        position: 'bottom',
        type: 'marker',
        icon: {
            primaryColor: '#22407F',
            secondaryColor: '#3B5998',
            shadow: true,
            size: 'md',
        },
        alt: 'Nombre de la image del marcador'
        }).addTo(map);
  }
};
