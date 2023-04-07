//Variaveis
const iniciar = document.getElementById('iniciar');
const parar = document.getElementById('parar');
const resetar = document.getElementById('resetar');
const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');

let h =0;
let m =0;
let s =0;

// Iniciar
function Iniciar(){
    s++;
    segundo.innerHTML = s;
    if (s / 60 === 1){
        s = 0;
        m++;
        minuto.innerHTML = m;
        if (m / 60 === 1){
            m = 0;
            minuto.innerHTML = m;
            h++;
            hora.innerHTML = h;
        }
    }
};

var setIniciar;

function timer(){
    setIniciar = setInterval(Iniciar, 1000);
}
iniciar.addEventListener('click', timer);

// Parar
const setParar = function() {clearInterval(setIniciar)};
parar.addEventListener('click', setParar);

// Resetar
resetar.addEventListener('click', () => {
        [h,m,s] = [0,0,0];
        hora.innerHTML = "00";
        minuto.innerHTML = "00";
        segundo.innerHTML = "00";
    });