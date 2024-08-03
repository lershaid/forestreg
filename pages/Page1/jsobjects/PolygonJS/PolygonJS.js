export default {
  createPolygon() {
    // Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVyc2hhaWQiLCJhIjoiY2xrdGoyYWdxMDBkYjNmcGdzZW0yeHJhciJ9.CsIyHt1RRfCKHTNPWaTcig';

    // Define the coordinates of the polygon
    const coordinates = [
      [-74.005974, 40.712776],
      [-74.005974, 40.722776],
      [-74.015974, 40.722776],
      [-74.015974, 40.712776],
      [-74.005974, 40.712776]
    ];

    // Create a new map instance
    const map = new mapboxgl.Map({
      container: 'Map1', // Container ID, replace it with your actual Map widget name if necessary
      style: 'mapbox://styles/mapbox/streets-v11', // Style URL
      center: [-74.005974, 40.712776], // Starting position [lng, lat]
      zoom: 12 // Starting zoom
    });

    // Add the polygon to the map
    map.on('load', function () {
      map.addSource('polygon', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [coordinates]
          }
        }
      });

      map.addLayer({
        'id': 'polygon',
        'type': 'fill',
        'source': 'polygon',
        'layout': {},
        'paint': {
          'fill-color': '#ff0000',
          'fill-opacity': 0.5
        }
      });

      map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'polygon',
        'layout': {},
        'paint': {
          'line-color': '#ff0000',
          'line-width': 2
        }
      });
    });
  }
};
