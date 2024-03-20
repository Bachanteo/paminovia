document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 1s';

    setTimeout(function() {
        header.style.opacity = 1;
    }, 500);
});
function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'block';
}
function caerFotos() {
    const lluviaFotos = document.createElement('div');
    lluviaFotos.classList.add('lluvia-fotos');

    const fotos = ['./Amor.jpeg', 'Amor2.jpeg', 'Amor3.jpeg', 'Amor4.jpeg', 'Amor5.jpeg', 'Amor6.jpeg', '344104218_951373752769400_5089909974250628094_n.jpg']; // Rutas de las fotos

    for (let i = 0; i < 7; i++) { // Crear 7 fotos
        const foto = document.createElement('img');
        foto.src = fotos[i]; // Utilizar las rutas de las fotos
        foto.classList.add('foto-caida');
        foto.style.left = Math.random() * window.innerWidth + 'px';
        foto.style.animationDuration = Math.random() * 3 + 2 + 's';
        lluviaFotos.appendChild(foto);
    }

    document.body.appendChild(lluviaFotos);
}