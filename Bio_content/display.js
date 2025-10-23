(() => {
  const nameNode = document.getElementById('hotspot-name');
  const summaryNode = document.getElementById('hotspot-summary');
  const regionNode = document.getElementById('hotspot-region');

  function updateHotspotDetails(hotspot) {
    if (!hotspot || !nameNode || !summaryNode || !regionNode) {
      return;
    }

    nameNode.textContent = hotspot.name || 'Unknown hotspot';
    summaryNode.textContent =
      hotspot.summary ||
      'No additional information is available for this hotspot.';
    regionNode.textContent = hotspot.region ? `Region • ${hotspot.region}` : '';
  }

  if (window.hotspotAPI && typeof window.hotspotAPI.onHotspotDisplay === 'function') {
    window.hotspotAPI.onHotspotDisplay(updateHotspotDetails);
  } else {
    console.warn('hotspotAPI bridge unavailable; hotspot selections will not be shown.');
  }
})();
