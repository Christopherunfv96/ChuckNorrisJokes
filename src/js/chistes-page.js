import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {
	const html = `
        <h3 class="mt-5">Chistes de Chuck Norris</h3>
        <hr>

        <button class="btn btn-primary"> Pide un chiste </button>

        <ol class="mt-2 list-group"> </ol>
    `;

	const divChistes = document.createElement("div");
	divChistes.innerHTML = html;

	body.append(divChistes);
};

const eventos = () => {
	olList = document.querySelector("ol");
	btnOtro = document.querySelector("button");

	btnOtro.addEventListener("click", async () => {
		btnOtro.disabled = true;
		dibujarChiste(await obtenerChiste());
		btnOtro.disabled = false;
	});
};

// Chiste { id, value }
const dibujarChiste = (chiste) => {
	olList = document.querySelector("ol");
	const olItem = document.createElement("li");
	olItem.innerHTML = `${olList.children.length + 1}. <b>${chiste.id}</b>: ${chiste.value}`;
	olItem.classList.add("list-group-item");
	olList.append(olItem);
};
export const init = () => {
	crearChistesHtml();
	eventos();
};
