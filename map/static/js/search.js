/*
 * search.js
 * Copyright (C) 2016 rmad17 <souravbasu17@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

window.onload = function() {
    L.mapbox.accessToken = 'pk.eyJ1Ijoicm1hZDE3IiwiYSI6ImNpaHV1aWZwaTAxd2t0N2tobGJ3dmxjZmEifQ.ZbLXHwj23H1Yy8YN3VJctg';
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm1hZDE3IiwiYSI6ImNpaHV1aWZwaTAxd2t0N2tobGJ3dmxjZmEifQ.ZbLXHwj23H1Yy8YN3VJctg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-79.4512, 43.6568],
        zoom: 13
    });

    map.addControl(new mapboxgl.Geocoder());
};
