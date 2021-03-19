const makeList = document.getElementById('estado');

function comboBox() {
  const estados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < estados.length; index += 1) {
    const listEstados = document.createElement('option');
    makeList.appendChild(listEstados).innerText = estados[index];
    makeList.appendChild(listEstados).value = estados[index];
  }
}

function dataOk() {
  const data = document.getElementById('data');
  if (data[2] === '/' || data[5] === '/') {
    const dia = data.substr(0, 2);
    const mes = data.substr(3, 2);
    const ano = data.substr(6, 4);
    if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano >= 0 && ano.length === 4)) {
      return true;
    }
  }
  return false;
}

function init() {
  comboBox();
}
window.onload = init;