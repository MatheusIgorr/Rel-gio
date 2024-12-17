const horas = document.getElementById("HORAS");
const minutos = document.getElementById("Minutos");
const segundos = document.getElementById("Segundos");
const dia = document.getElementById("Dia");
const mes = document.getElementById("Mes");
const ano = document.getElementById("Ano");

const relogio = setInterval(function time() {
    let hoje = new Date();
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();
    let d = hoje.getDate();
    let mn = hoje.getMonth() + 1; // Os meses começam do 0
    let a = hoje.getFullYear();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    if (d < 10) d = "0" + d;
    if (mn < 10) mn = "0" + mn;

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;
    dia.textContent = d;
    mes.textContent = mn;
    ano.textContent = a;

}, 1000);
