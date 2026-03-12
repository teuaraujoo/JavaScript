import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

const btn = document.getElementById('gerar-cpf');
function init() {
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = '';
  const gera = new GeraCPF();
  cpfGerado.innerHTML = gera.geraNovoCpf();
}


btn.addEventListener("click", () => {
  init();
});
