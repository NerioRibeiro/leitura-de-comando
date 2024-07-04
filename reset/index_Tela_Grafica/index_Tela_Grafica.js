var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 900, 900);

function desenhaCirculo(x, y, raio){
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

desenhaCirculo(50, 300, 50);