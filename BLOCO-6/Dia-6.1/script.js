const makeList = document.getElementById('estado');

function comboBox() {
  const estados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < estados.length; index += 1) {
    const listEstados = document.createElement('option');
    makeList.appendChild(listEstados).innerText = estados[index];
    makeList.appendChild(listEstados).value = estados[index];
  }
}

function init() {
  comboBox();
}
window.onload = init;