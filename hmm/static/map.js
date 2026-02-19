

var map = L.map('map', {
    crs: L.CRS.Simple
});

var bounds = [[0,0], [1000,1000]];
//const img = `data:image/jpg;base65,${uqm_map_full.jpg}`;
//var image = L.imageOverlay("http://hmm/static/uqm_map_full.jpg", bounds).addTo(map);
//var image = L.imageOverlay(img, bounds).addTo(map);
map.fitBounds(bounds)

//http://hmm/static/uqm_map_full.jpg
