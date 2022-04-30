globe = new ENCOM.Globe(window.innerWidth, window.innerHeight, {
    font: "Inconsolata",
    data: [],
    tiles: grid.tiles,
    baseColor: "#000000",
    markerColor: "#992ec7",
    pinColor: "#FFC904",
    satelliteColor: "#8892b0",
    scale: 1,
    dayLength: 10000,
    introLinesDuration: 1000,
    maxPins: 100,
    maxMarkers: 5,
    viewAngle: 0.1
});

document.getElementById("globe").appendChild(globe.domElement);
globe.init(start);

function animate() {
    if (globe)
        globe.tick();
    
    requestAnimationFrame(animate);
}

function start() {
    globe.init();
    animate();
}