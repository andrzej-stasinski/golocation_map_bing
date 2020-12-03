var map = null;

function LocateMe() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: 0, timeout: 4000, enableHighAccuracy: true});
	}
}

function onSuccess(loc) {

	map = new Microsoft.Maps.Map(document.getElementById("map"),{credentials:"Your Bing Maps Key",zoom:14});

	var view = new Microsoft.Maps.Location(loc.coords.latitude, loc.coords.longitude);
	document.getElementById('accuracy').innerHTML = "accuracy = " + loc.coords.accuracy + " m";
	map.setView({ center: view });

	var options = { icon: 'explosion.jpg' , width:71, height: 100, anchor: new Microsoft.Maps.Point(20,20)};
	var pushpinImg = new Microsoft.Maps.Pushpin(view, options);
	map.entities.push(pushpinImg);
}

function onError(geoPositionError) {
	switch(geoPositionError.code) {
		case 0:
			alert('Nieznany błąd');
			break;
		case 1:
			alert('Użytkownik nie wyraził zgody na udostępnienie lokalizacji');
			break;
		case 2:
			alert('Nie można ustalić lokalizacji');
			break;
		case 3:
			alert('Przekroczono czas oczekiwania na ustalenie lokalizacji');
			break;
		default:
	}

}
