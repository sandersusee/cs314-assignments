 var map;
 function initMap() {
	
	 var styledMapType = new google.maps.StyledMapType(
            [
			  {
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#f5f5f5"
				  }
				]
			  },
			  {
				"elementType": "labels.icon",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#616161"
				  }
				]
			  },
			  {
				"elementType": "labels.text.stroke",
				"stylers": [
				  {
					"color": "#f5f5f5"
				  }
				]
			  },
			  {
				"featureType": "administrative",
				"elementType": "labels",
				"stylers": [
				  {
					"color": "#ffffff"
				  },
				  {
					"visibility": "simplified"
				  }
				]
			  },
			  {
				"featureType": "administrative",
				"elementType": "labels.text.stroke",
				"stylers": [
				  {
					"color": "#000000"
				  }
				]
			  },
			  {
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#bdbdbd"
				  }
				]
			  },
			  {
				"featureType": "landscape",
				"stylers": [
				  {
					"color": "#ff0000"
				  }
				]
			  },
			  {
				"featureType": "landscape",
				"elementType": "labels",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"featureType": "landscape",
				"elementType": "labels.text",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#eeeeee"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "labels",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#757575"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#e5e5e5"
				  }
				]
			  },
			  {
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#9e9e9e"
				  }
				]
			  },
			  {
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#ffffff"
				  }
				]
			  },
			  {
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
				  {
					"visibility": "off"
				  }
				]
			  },
			  {
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#757575"
				  }
				]
			  },
			  {
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#dadada"
				  }
				]
			  },
			  {
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#616161"
				  }
				]
			  },
			  {
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#9e9e9e"
				  }
				]
			  },
			  {
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#e5e5e5"
				  }
				]
			  },
			  {
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#eeeeee"
				  }
				]
			  },
			  {
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				  {
					"color": "#c9c9c9"
				  }
				]
			  },
			  {
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
				  {
					"color": "#9e9e9e"
				  }
				]
			  }
			],
            {name: 'Styled Map'});
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 38.4053225, lng: -95.9763322},
	  zoom: 4,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
					'styled_map']
		  }
		});

		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');
		
	var image = 'resources/jbicon.PNG';		 
	let place1 = {
		 lat: 47.6062,
		 lng: -122.3321
	};
	let marker1 = new google.maps.Marker ({position: place1, map: map, icon: image});
	let info1 = new google.maps.InfoWindow({content: '<h5>Seattle<br>January 30, 2006</h5>'});
	marker1.addListener('click', function() {info1.open(map, marker1);});
	marker1.setMap(map);
	 
	let place2 = {
		 lat: 34.052235, 
		 lng: -118.243683
	};
	let marker2 = new google.maps.Marker ({position: place2, map: map, icon: image});
	let info2 = new google.maps.InfoWindow({content: '<h5>Los Angeles<br>August 16, 2013</h5>'});
	marker2.addListener('click', function() {info2.open(map, marker2);});
	marker2.setMap(map);
	
	let place3 = {
		 lat: 33.753746, 
		 lng: -84.386330
	};
	let marker3 = new google.maps.Marker({position: place3, map: map, icon: image});
	let info3 = new google.maps.InfoWindow({content: '<h5>Atlanta<br>August 20, 2008</h5>'});
	marker3.addListener('click', function() {info3.open(map, marker3);});
	marker3.setMap(map); 
	 
	let place4 = {
		 lat: 41.505493, 
		 lng: -81.681290
	};
	let marker4 = new google.maps.Marker({position: place4, map: map, icon: image});
	let info4 = new google.maps.InfoWindow({content: '<h5>Cleveland<br>August 31, 2010</h5>'});
	marker4.addListener('click', function() {info4.open(map, marker4);});
	marker4.setMap(map); 

		let place5 = {
		 lat: 39.742043, 
		 lng:  -104.991531
	};
	let marker5 = new google.maps.Marker({position: place5, map: map, icon: image});
	let info5 = new google.maps.InfoWindow({content: '<h5>Denver<br>February 3, 2006</h5>'});
	marker5.addListener('click', function() {info5.open(map, marker5);});
	marker5.setMap(map); 
 }