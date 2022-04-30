let header = document.querySelector("#header");

let text = [
	{t: "a", ms: 100},
	{t: "aj", ms: 100},
	{t: "ajf", ms: 100},
	{t: "ajfu", ms: 100},
	{t: "ajfut", ms: 100},
	{t: "ajfuto", ms: 300},
	{t: "ajfut", ms: 100},
	{t: "ajfu", ms: 100},
	{t: "ajfu.", ms: 100},
	{t: "ajfu.t", ms: 100},
	{t: "ajfu.to", ms: 300},
]

let i = 0;
let next = () => {
	let curr = text[i];
	header.innerText = curr.t;
	console.log(curr.t);
	i++;

	if (i < text.length) {
		setTimeout(next, curr.ms);
	} else {
		setTimeout(() => {
			document.getElementById("main").style.opacity = 1;
		}, 250);
		
	}
}

next();