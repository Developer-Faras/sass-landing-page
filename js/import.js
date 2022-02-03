// Dynamicaly Include Scripts Library
function requireLib(url) {
    let script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';

    document.body.appendChild(script);
}

let local = './js/'

// Import All Js Library
requireLib('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');  // Bootstarp
// requireLib('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'); //Mapbox


// Import Main Js
requireLib(local + 'main.js');