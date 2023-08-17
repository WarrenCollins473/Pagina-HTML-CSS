"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const navPag = document.querySelector(".elementos");
const botaoPag = document.querySelector(".linhas");
const linhasPag = document.querySelectorAll(".span");
const secao = document.getElementById("comments");
const url = "https://jsonplaceholder.typicode.com/posts";
function alternarPag() {
    navPag.classList.toggle("barra-lateral");
    linhasPag[0].classList.toggle("linha-0");
    linhasPag[1].classList.toggle("linha-1");
    linhasPag[2].classList.toggle("linha-2");
}
function carregarComentarios() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log(data);
        data.map((post) => {
            const div = document.createElement("div");
            const title = document.createElement("h4");
            const paragraph = document.createElement("p");
            title.innerText = post.title;
            paragraph.innerText = post.body;
            div.appendChild(title);
            div.appendChild(paragraph);
            secao.appendChild(div);
        });
    });
}
carregarComentarios();
botaoPag.addEventListener("click", alternarPag);
