const jokeUrl = "https://api.chucknorris.io/jokes/random";
const obtenerChiste = async () => {
	try {
		const resp = await fetch(jokeUrl);

		if (!resp.ok) throw "No se pudo realizar la peticion";

		const { id, value } = await resp.json();

		return { id, value };
	} catch (err) {
		throw err;
	}
};
export { obtenerChiste };
