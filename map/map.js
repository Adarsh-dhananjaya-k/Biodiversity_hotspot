(() => {
  function ensureLeaflet() {
    if (typeof L === 'undefined') {
      console.error('Leaflet failed to load.');
      return null;
    }
    return L;
  }

  function initMap() {
    const leaflet = ensureLeaflet();
    if (!leaflet) return;

    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Map container missing.');
      return;
    }

    const initialView = [5, 20];
    const initialZoom = 2;

    const map = leaflet.map(mapContainer, {
      worldCopyJump: true,
      attributionControl: false
    });

    map.setView(initialView, initialZoom);

    leaflet
      .tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 17,
          minZoom: 2,
          crossOrigin: true,
          attribution:
            'Tiles (c) Esri - Sources: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      )
      .addTo(map);

    const hotspots = Array.isArray(window.hotspots) ? window.hotspots : [];
    const markers = [];
    const baseRadius = 8;

    hotspots.forEach((hotspot) => {
      const marker = leaflet
        .circleMarker([hotspot.latitude, hotspot.longitude], {
          radius: baseRadius,
          color: '#fc5919ff',
          weight: 2,
          fillColor: '#ff0000ff',
          fillOpacity: 0.6
        })
        .on('click', () => {
          if (window.hotspotAPI && typeof window.hotspotAPI.selectHotspot === 'function') {
            window.hotspotAPI.selectHotspot(hotspot);
          }
        })
        .bindTooltip(`${hotspot.name} (${hotspot.region})`, { direction: 'top' })
        .addTo(map);

      markers.push(marker);
    });

    const updateMarkerScale = () => {
      const zoomDelta = map.getZoom() - initialZoom;
      const scaledRadius = Math.max(5, baseRadius + zoomDelta * 2);

      markers.forEach((marker) => {
        marker.setStyle({ radius: scaledRadius });
      });
    };

    map.on('zoomend', updateMarkerScale);
    updateMarkerScale();
  }

  window.addEventListener('DOMContentLoaded', initMap);
})();
