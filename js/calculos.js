//Variables para calcular los pasos y el display del resultado
let cerrarsesion = document.getElementById('cerrarsesion');
let boton3 = document.getElementById('pasos');
let boton4 = document.getElementById('imc');
let kilometros = document.getElementById('kilometros');
let calcular = document.getElementById('calcular');
let calculoDePasos = document.getElementById('calculoDePasos');
let resultado;

//Evento al presionar el boton "Cerrar sesion"
cerrarsesion.addEventListener('click', function() 
  {
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por visitar el sitio',
    showConfirmButton: false,
    timer: 2000
  })
  setTimeout(() => {
    window.location.href = '../index.html'
  }, 2200);
})


//Evento de mouse cuando se pasa/se sale por encima del boton "Cerrar sesion"
cerrarsesion.onmouseover = () => {
  cerrarsesion.classList.replace ('btn-secondary','btn-info')
}
cerrarsesion.onmouseout = () => {
  cerrarsesion.classList.replace ('btn-info', 'btn-secondary')
}


// Agrega un evento de click al botón "Pasos"
boton3.addEventListener('click', function () {
    // Muestra u oculta el formulario según su estado actual
    if (formulariopasos.style.display === 'none') {
      formulariopasos.style.display = 'block';
        } else {
          formulariopasos.style.display = 'none';
        }
      });

//Evento de mouse cuando se pasa/se sale por encima del boton "Calculadora de pasos diarios"
boton3.onmouseover = () => {
  boton3.classList.replace ('btn-primary','btn-info')
}
boton3.onmouseout = () => {
  boton3.classList.replace ('btn-info', 'btn-primary')
}


//Funcion para calcular los pasos
calcular.addEventListener ('click', calcularPasos)
function calcularPasos()
{
    if (kilometros.value == 0 || kilometros.value == '') 
    {   
      Swal.fire({
        title: ('Ingrese la cantidad de kilometros que camino hoy'),
        width: 800,
        padding: '1em',
        color: 'black',
        background: 'yellow',
        backdrop: `
                  url("https://www.gifsanimados.org/data/media/106/hombre-imagen-animada-0395.gif")
                  center top
                  no-repeat
                  `
      })
      kilometros.value = '0';
    } 
    else
    {
        
        resultado = kilometros.value*1500;
        (resultado >= 10000) ? objetivo() : noObjetivo();
        console.log (resultado)
        //Funcion para el texto si alcanzo el objetivo diario.
        function objetivo ()
        {
            Swal.fire({
              title: ('Felicitaciones, lograste alcanzar el objetivo diario. Caminaste '+resultado+' pasos en el dia de hoy.'),
              width: 800,
              padding: '1em',
              color: 'white',
              background: 'yellowgreen',
              backdrop: `
                url("https://www.gifsanimados.org/data/media/1103/felicitacion-imagen-animada-0110.gif")
                center top
                no-repeat
              `
            })
            borrar();
        }

        //Funcion para el texto si NO alcanzo el objetivo diario.
        function noObjetivo ()
        {
          Swal.fire({
            title: ('Ánimo, en el día de hoy caminaste '+resultado+' pasos. El mínimo son 10000 pasos diarios para alcanzar el objetivo. A no bajar los brazos!!!.'),
            width: 800,
            padding: '1em',
            color: 'white',
            background: 'red',
            backdrop: `
                        url("https://www.gifsanimados.org/data/media/106/hombre-imagen-animada-0388.gif")
                        center top
                        no-repeat
                      `
          })
          borrar();
        }
    }
}

//Evento para vaciar el input "Kilometros"
let reiniciar = document.getElementById('reiniciar')
reiniciar.onclick = () => borrar() ;
function borrar () 
                    {
                    kilometros.value = '0';
                    calculoDePasos.style.display = 'none';
                    error.style.display = 'none';
                    }

//Evento de click al botón "imc"
boton4.addEventListener('click', function() {
    // Muestra u oculta el formulario según su estado actual
    if (formularioimc.style.display === 'none') {
      formularioimc.style.display = 'block';
    } else {
      formularioimc.style.display = 'none';
    }
  });

//Evento de mouse cuando se pasa/se sale por encima del boton "Calculadora de Indice de masa corporal"
boton4.onmouseover = () => {
  boton4.classList.replace ('btn-primary','btn-info')
}
boton4.onmouseout = () => {
  boton4.classList.replace ('btn-info', 'btn-primary')
}

//Calculo sobre el articulo "imc"                             
let altura = document.getElementById('altura');    
let peso = document.getElementById('peso');
let calcularimc = document.getElementById('calcularimc');  
let calculoimc = document.getElementById('calculoimc');

//Calculo de indice de masa corporal
calcularimc.addEventListener ('click', calcularUserimc)
function calcularUserimc()
{
    if (altura.value == 0 || altura.value == '')
    {
      Swal.fire({
        title: ('Indique su altura por favor'),
        width: 600,
        padding: '3em',
        color: 'black',
        background: 'yellow',
        backdrop: `
                  url("https://www.gifsanimados.org/data/media/106/hombre-imagen-animada-0395.gif")
                  center top
                  no-repeat
                  `
      }) 
    }
    else if (peso.value == 0 || peso.value == '') {
      Swal.fire({
        title: ('Indique su peso por favor'),
        width: 600,
        padding: '3em',
        color: 'black',
        background: 'yellow',
        backdrop: `
                  url("https://www.gifsanimados.org/data/media/106/hombre-imagen-animada-0395.gif")
                  center top
                  no-repeat
                  `
      }) 
    }
    else
    {
        let imcusuario = (peso.value/(altura.value*altura.value))*10000;
        console.log (imcusuario);
        if (imcusuario < 18) {
          Swal.fire({
            title: 'Te encuentras en el rango de BAJO DE PESO',
            text: 'Tu indice de masa corporal es '+(Math.floor(imcusuario)+'.'),
            width: 800,
            padding: '1em',
            color: 'black',
            background: 'orange',
            backdrop: `
                      url("https://www.gifsanimados.org/data/media/1424/comida-y-alimentacion-imagen-animada-0290.jpg")
                      center top
                      no-repeat
                      `
                     }) 
        }else if ((imcusuario >= 18) && (imcusuario < 25)) {
          Swal.fire({
            title: 'Te encuentras en el rango de PESO NORMAL',
            text: 'Tu indice de masa corporal es '+(Math.floor(imcusuario)+'.'),
            width: 800,
            padding: '1em',
            color: 'black',
            background: 'orange',
            backdrop: `
                      url("https://www.gifsanimados.org/data/media/163/fitness-y-ejercicio-imagen-animada-0032.gif")
                      center top
                      no-repeat
                      `
                      })
        }else if ((imcusuario >= 25) && (imcusuario < 29.9)) {
          Swal.fire({
            title: 'Te encuentras en el rango de SOBREPESO',
            text: 'Tu indice de masa corporal es '+(Math.floor(imcusuario)+'.'),
            width: 800,
            padding: '1em',
            color: 'black',
            background: 'orange',
            backdrop: `
                      url("https://www.gifsanimados.org/data/media/163/fitness-y-ejercicio-imagen-animada-0013.gif")
                      center top
                      no-repeat
                      `
                      })
        }else{
          Swal.fire({
            title: 'Te encuentras en el rango de OBESIDAD',
            text: 'Tu indice de masa corporal es '+(Math.floor(imcusuario)+'.'),
            width: 800,
            padding: '1em',
            color: 'black',
            background: 'orange',
            backdrop: `
                      url("https://www.gifsanimados.org/data/media/216/hipopotamo-imagen-animada-0098.gif")
                      center top
                      no-repeat
                      `
                     }) 
        }
        borrarimc();
    }
}

//Evento para vaciar el input "Altura y Peso".
let reiniciarimc = document.getElementById('reiniciarimc')
reiniciarimc.onclick = () => borrarimc() ;
function borrarimc ()
                    {
                    peso.value = '';
                    altura.value = '';
                    calculoimc.style.display = 'none';
                    }

