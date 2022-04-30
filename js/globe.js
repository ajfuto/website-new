let pins = [
	{lat: 28.6024, lon: -81.2001, t: "Orlando"},
]

globe = new ENCOM.Globe(window.innerWidth, window.innerHeight, {
	font: "Fira Code",
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

function animate() {
	if (globe)
		globe.tick();
	
	requestAnimationFrame(animate);
}

let start = () => {
	globe.init();
	animate();

	for (p of pins)
		globe.addPin(p.lat, p.lon, p.t);
}

window.addEventListener("resize", () => {
	let h = window.innerHeight - main.clientTop + main.clientHeight;
	globe.camera.aspect = window.innerWidth / h;
	globe.camera.updateProjectionMatrix();
	globe.renderer.setSize(window.innerWidth, h);
})