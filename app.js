function AtualizarRelogio() {
    const hoje = new Date();
    const hora = FormatarTempo(hoje.getHours());
    const minuto = FormatarTempo(hoje.getMinutes());
    const segundo = FormatarTempo(hoje.getSeconds());

    document.getElementById('hora').innerHTML = hora;
    document.getElementById('minuto').innerHTML = minuto;
    document.getElementById('segundo').innerHTML = segundo;
}

function FormatarTempo(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(AtualizarRelogio, 1000);
