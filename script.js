function sim() {
    alert("Prometo te carregar hoje");
    location.href = "https://open.spotify.com/intl-pt/track/2GCKWEsbb0Xo1oodTOKVi1?si=cdd850b87108468f";
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
