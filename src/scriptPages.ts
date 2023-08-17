const navPag = document.querySelector(".elementos")! as HTMLElement;
const botaoPag = document.querySelector(".linhas")! as HTMLElement;
const linhasPag = document.querySelectorAll(".span");
const secao = document.getElementById("comments") as HTMLElement;
const url = "https://jsonplaceholder.typicode.com/posts";

function alternarPag() {
  navPag.classList.toggle("barra-lateral");
  linhasPag[0].classList.toggle("linha-0");
  linhasPag[1].classList.toggle("linha-1");
  linhasPag[2].classList.toggle("linha-2");
}

async function carregarComentarios() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.map((post: any) => {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    const paragraph = document.createElement("p");

    title.innerText = post.title;
    paragraph.innerText = post.body;

    div.appendChild(title);
    div.appendChild(paragraph);

    secao.appendChild(div);
  });
}

carregarComentarios();
botaoPag.addEventListener("click", alternarPag);
