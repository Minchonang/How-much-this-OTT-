const mainGuide = document.getElementById("guideJS");
const netflixLink = document.getElementById("netflixGuide");
const watchaLink = document.getElementById("watchaGuide");
const wavveLink = document.getElementById("wavveGuide");
const tvingLink = document.getElementById("tvingGuide");
const disneyLink = document.getElementById("disneyGuide");

const netflixTable = document.getElementById("netflixJs");
const watchaTable = document.getElementById("watchaJs");
const wavveTable = document.getElementById("wavveJs");
const tvingTable = document.getElementById("tvingJs");
const disneyTable = document.getElementById("disneyJs");

const netflixButton = document.getElementById("netflixButton");
const watchaButton = document.getElementById("watchaButton");
const wavveButton = document.getElementById("wavveButton");
const tvingButton = document.getElementById("tvingButton");
const disneyButton = document.getElementById("disneyButton");

const CLICK = "click";
const HIDDEN = "hidden";
const SELECTED = "selected";

const NETFLIXHOME = "netflixHome";
const WATCHAHOME = "watchaHome";
const WAVVEHOME = "wavveHome";
const TVINGHOME = "tvingHome";
const DISNEYHOME = "disneyHome";

function show(button, table) {
	button.classList.add(SELECTED);
	table.classList.remove(HIDDEN);
	mainGuide.classList.add(HIDDEN);
}

function hide(link, button, table) {
	link.classList.add(HIDDEN);
	button.classList.remove(SELECTED);
	table.classList.add(HIDDEN);
}

function showNetflix(event) {
	netflixLink.classList.remove(HIDDEN);
	netflixLink.classList.add(NETFLIXHOME);
	show(netflixButton, netflixTable);
	hide(watchaLink, watchaButton, watchaTable);
	hide(wavveLink, wavveButton, wavveTable);
	hide(tvingLink, tvingButton, tvingTable);
	hide(disneyLink, disneyButton, disneyTable);
}

function showWatcha(event) {
	watchaLink.classList.remove(HIDDEN);
	watchaLink.classList.add(WATCHAHOME);
	show(watchaButton, watchaTable);
	hide(netflixLink, netflixButton, netflixTable);
	hide(wavveLink, wavveButton, wavveTable);
	hide(tvingLink, tvingButton, tvingTable);
	hide(disneyLink, disneyButton, disneyTable);
}

function showWavve(event) {
	wavveLink.classList.remove(HIDDEN);
	wavveLink.classList.add(WAVVEHOME);
	show(wavveButton, wavveTable);
	hide(netflixLink, netflixButton, netflixTable);
	hide(watchaLink, watchaButton, watchaTable);
	hide(tvingLink, tvingButton, tvingTable);
	hide(disneyLink, disneyButton, disneyTable);
}

function showTving(event) {
	tvingLink.classList.remove(HIDDEN);
	tvingLink.classList.add(TVINGHOME);
	show(tvingButton, tvingTable);
	hide(netflixLink, netflixButton, netflixTable);
	hide(watchaLink, watchaButton, watchaTable);
	hide(wavveLink, wavveButton, wavveTable);
	hide(disneyLink, disneyButton, disneyTable);
}

function showDisney(event) {
	disneyLink.classList.remove(HIDDEN);
	disneyLink.classList.add(DISNEYHOME);
	show(disneyButton, disneyTable);
	hide(netflixLink, netflixButton, netflixTable);
	hide(watchaLink, watchaButton, watchaTable);
	hide(wavveLink, wavveButton, wavveTable);
	hide(tvingLink, tvingButton, tvingTable);
}

netflixButton.addEventListener(CLICK, showNetflix);
watchaButton.addEventListener(CLICK, showWatcha);
wavveButton.addEventListener(CLICK, showWavve);
tvingButton.addEventListener(CLICK, showTving);
disneyButton.addEventListener(CLICK, showDisney);
