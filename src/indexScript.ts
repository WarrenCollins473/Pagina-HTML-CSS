const nav = document.querySelector(".elementos")! as HTMLElement;
const botao = document.querySelector(".linhas")! as HTMLElement;
const linhas = document.querySelectorAll(".span");

function alternar() {
  nav.classList.toggle("barra-lateral");
  linhas[0].classList.toggle("linha-0");
  linhas[1].classList.toggle("linha-1");
  linhas[2].classList.toggle("linha-2");
  botao.addEventListener("click", alternar);
}

botao.addEventListener("click", alternar);
