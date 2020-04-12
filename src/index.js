//const jokeUrl = "https://api.chucknorris.io/jokes/random";

//import { obtenerChiste } from "./js/http-provider";
import { init } from "./js/chistes-page";

// import * as CRUD from './js/crud-provider';

init();

// fetch(jokeUrl).then((response) => {
// 	//respuesta
// 	response.json().then((data) => {
// 		console.log(data.id);
// 	});
// });
//* otra manera mas corta y eficiente
// fetch(jokeUrl)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

// obtenerChiste().then((data) => console.log(data));
// obtenerChiste().then(console.log);
