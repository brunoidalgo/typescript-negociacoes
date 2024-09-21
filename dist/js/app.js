import { NegociacaoController } from "./controllers/negociacao_controller.js";
// Aqui estamos chamado a class e refereciando cada parâmetro do constructor.
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
