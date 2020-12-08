//  Testes Jest:

const { Script } = require("vm");

module.exports = Script;

//  Funções:

function retornaValor(dddOrigem, dddDestino) {
  if (dddOrigem == '011' && dddDestino == '016') {
    return 1.90;
  } else if (dddOrigem == '016' && dddDestino == '011') {
    return 2.9;
  } else if (dddOrigem == '011' && dddDestino == '017') {
    return 1.70;
  } else if (dddOrigem == '017' && dddDestino == '011') {
    return 2.70;
  } else if (dddOrigem == '011' && dddDestino == '018') {
    return 0.90;
  } else if (dddOrigem == '018' && dddDestino == '011') {
    return 1.90;
  } else {
    return 0;
  }
}

function fala30() {
  let fala30 = {};
  fala30.dddOrigem = document.querySelector('#fala30dddOrigem').value;
  fala30.dddDestino = document.querySelector('#fala30dddDestino').value;
  fala30.minutos = document.querySelector('#fala30minutos').value;
  fala30.minutos = parseFloat(fala30.minutos);
  let valorPorMinuto = 0;
  let valorSemPlano = 0;
  if (fala30.dddDestino === '' || fala30.dddOrigem === '' || fala30.dddDestino === fala30.dddOrigem) {
    return document.getElementById('label1').innerHTML = 'Favor selecionar o ddd';
  }
  if (isNaN(fala30.minutos)) {
    return document.getElementById('label1').innerHTML = 'Preencha o campo de minutos';
  }
  valorPorMinuto = retornaValor(fala30.dddOrigem, fala30.dddDestino);
  valorSemPlano = fala30.minutos * valorPorMinuto;
  minutosExtras = fala30.minutos - 30;
  valorMultiplicado = valorPorMinuto * minutosExtras;
  valorComPlano = ((valorPorMinuto / 10) * minutosExtras) + valorMultiplicado;
  if (fala30.minutos <= 30) {
    document.getElementById('label1').innerHTML = 'A ligação é gratuita';
  } else {
    document.getElementById('label1').innerHTML = valorComPlano;
  }
  document.getElementById('label2').innerHTML = valorSemPlano;
  return;
}

function fala60() {
  let fala60 = {};
  fala60.dddOrigem = document.querySelector('#fala60dddOrigem').value;
  fala60.dddDestino = document.querySelector('#fala60dddDestino').value;
  fala60.minutos = document.querySelector('#fala60minutos').value;
  fala60.minutos = parseFloat(fala60.minutos);
  let valorPorMinuto = 0;
  let valorSemPlano = 0;
  if (fala60.dddDestino === '' || fala60.dddOrigem === '' || fala60.dddDestino === fala60.dddOrigem) {
    return document.getElementById('label3').innerHTML = 'Favor selecionar o ddd';
  }
  if (isNaN(fala60.minutos)) {
    return document.getElementById('label3').innerHTML = 'Preencha o campo de minutos';
  }
  valorPorMinuto = retornaValor(fala60.dddOrigem, fala60.dddDestino);
  valorSemPlano = fala60.minutos * valorPorMinuto;
  minutosExtras = fala60.minutos - 60;
  valorMultiplicado = valorPorMinuto * minutosExtras;
  valorComPlano = ((valorPorMinuto / 10) * minutosExtras) + valorMultiplicado;
  if (fala60.minutos <= 60) {
    document.getElementById('label3').innerHTML = 'A ligação é gratuita';
  } else {
    document.getElementById('label3').innerHTML = valorComPlano;
  }
  document.getElementById('label4').innerHTML = valorSemPlano;
  return;
}

function fala120() {
  let fala120 = {};
  fala120.dddOrigem = document.querySelector('#fala120dddOrigem').value;
  fala120.dddDestino = document.querySelector('#fala120dddDestino').value;
  fala120.minutos = document.querySelector('#fala120minutos').value;
  fala120.minutos = parseFloat(fala120.minutos);
  let valorPorMinuto = 0;
  let valorSemPlano = 0;
  if (fala120.dddDestino === '' || fala120.dddOrigem === '' || fala120.dddDestino === fala120.dddOrigem) {
    return document.getElementById('label5').innerHTML = 'Favor selecionar o ddd';
  }
  if (isNaN(fala120.minutos)) {
    return document.getElementById('label5').innerHTML = 'Preencha o campo de minutos';
  }
  valorPorMinuto = retornaValor(fala120.dddOrigem, fala120.dddDestino);
  valorSemPlano = fala120.minutos * valorPorMinuto;
  minutosExtras = fala120.minutos - 120;
  valorMultiplicado = valorPorMinuto * minutosExtras;
  valorComPlano = ((valorPorMinuto / 10) * minutosExtras) + valorMultiplicado;
  if (fala120.minutos <= 120) {
    document.getElementById('label5').innerHTML = 'A ligação é gratuita';
  } else {
    document.getElementById('label5').innerHTML = valorComPlano;
  }
  document.getElementById('label6').innerHTML = valorSemPlano;
  return;
}
