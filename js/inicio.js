// Variables para desplegar los formularios a completar
let boton1 = document.getElementById('iniciar');
let boton2 = document.getElementById('registrarse');
let formularioiniciosesion = document.getElementById('formularioiniciosesion');
let formularioalta = document.getElementById('formularioalta');
let ingresar = document.getElementById('ingresar');

//Evento de click al botón "Iniciar sesion"
boton1.addEventListener('click', function() {
  // Muestra u oculta el formulario según su estado actual
  if (formularioiniciosesion.style.display === 'none') 
  {
    formularioiniciosesion.style.display = 'inline';
    setTimeout(() => {
      Swal.fire('¿Sigues Ahi?');
      // Esta seteado 20000 a modo de prueba 
    }, 20000);
  }
  else
  {
    formularioiniciosesion.style.display = 'none';
  }
});

//Evento de mouse cuando se pasa/se sale por encima del boton "Iniciar sesion"
boton1.onmouseover = () => {
  boton1.classList.replace ('btn-secondary','btn-info')
}
boton1.onmouseout = () => {
  boton1.classList.replace ('btn-info', 'btn-secondary')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Registrarse"
boton2.onmouseover = () => {
    boton2.classList.replace ('btn-secondary','btn-info')
}
boton2.onmouseout = () => {
    boton2.classList.replace ('btn-info', 'btn-secondary')
}

//Evento de mouse cuando se pasa/se sale por encima del boton "Ingresar"
ingresar.onmouseover = () => {
  ingresar.classList.replace ('btn-primary','btn-info')
}
ingresar.onmouseout = () => {
  ingresar.classList.replace ('btn-info', 'btn-primary')
}

//Evento al presionar el boton "Ingresar" e ir a la pagina principal
ingresar.addEventListener('click', function() {
const nombreUser = document.getElementById('nombre').value;
const emailUser = document.getElementById('email').value;
      
        fetch('js/usuarios.json')
          .then(response => {
            if (response.ok) {
                                return response.json();
                             }
          })
          .then(data => {
            // Procesar los datos JSON
            const usuarios = data;
      
            // Verificar si existe un usuario con el correo electrónico ingresado
            const usuarioEncontrado = usuarios.find(u => u.email === emailUser);
            if (usuarioEncontrado) {
              // Usuario encontrado
             alert('Bienvenido '+nombreUser);
             Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Bienvenido '+nombreUser,
              showConfirmButton: false,
              timer: 2500});
              window.location.href = './pages/pagina_principal.html';
            } else {
              // Usuario no encontrado
                Swal.fire({
                icon: 'error',
                title: 'Usuario inexistente',
                footer: '¿Desea darse de alta? Presione en el botón "Registrarse"'
              })
              formularioiniciosesion.style.display = 'none';
            }
          })
          .catch(error => {
            // Manejar errores
            console.error(error);
            alert('Error al cargar el archivo JSON:', error);
          });
      });

//Animacion de la palabra "WebSite" mediante la libreria "Anime JS"
let svgPath = document.querySelectorAll('.path');
let svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1200,
  delay: (el, i) => { return i * 500 }
});

//Evento de click al botón "Registrarse"
boton2.addEventListener('click', function() {
  // Muestra u oculta el formulario según su estado actual
  if (formularioalta.style.display === 'none') 
  {
    formularioalta.style.display = 'block';
    formularioalta.style.position = 'absolute';
    formularioalta.style.background = 'black';
    formularioalta.style.width = '400px';
    formularioalta.style.border = '2px solid black';
    formularioalta.style.padding = '20px';
    formularioalta.style.top = '25%';
    formularioalta.style.left = '35%';
    formularioalta.style.font = '20px bold courier';
    formularioalta.style.color = 'white'
    setTimeout(() => {
      Swal.fire('¿Sigues Ahi?');
      // Esta seteado a 35000 a modo de prueba 
    }, 35000);
  }
  else
  {
    formularioalta.style.display = 'none';
  }
})


//Evento al presionar el boton "Darse de Alta", los datos se almacenan en el LocalStorage
let alta = document.getElementById('alta')
alta.addEventListener ('click', respuestaAlta)
function respuestaAlta(e)
{
  
  const newUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  e.preventDefault();
  
  const nombreUser = formularioalta['nombre'].value;
  const edadUser = formularioalta['edad'].value;
  const sexoUser = formularioalta['sexo'].value;
  const emailUser = formularioalta['email'].value;
  
  if ((nombreUser == ''))
  {
          Swal.fire({
          title: ('Ingrese su nombre por favor.'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
          backdrop: `
                    url('https://www.gifsanimados.org/data/media/105/mujer-imagen-animada-0193.gif')
                    center top
                    no-repeat
                    `
        })
      }
      else if (edadUser == '') {
        Swal.fire({
          title: ('Ingrese su edad por favor.'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
          backdrop: `
                    url("https://www.gifsanimados.org/data/media/105/mujer-imagen-animada-0110.gif")
                    center top
                    no-repeat
                    `
        })
      }
      else if ((!sexoUser == 'masculino') || (!sexoUser =='femenino') || (sexoUser == '') ) {
        Swal.fire({
          title: ('Indique por favor su genero "Masculino" o "Femenino".'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
          backdrop: `
                    url("https://www.gifsanimados.org/data/media/27/adan-y-eva-imagen-animada-0004.gif")
                    center top
                    no-repeat
                    `
        })
        
      }
      else if ((emailUser == '') || (!emailUser.includes('@')) || (!emailUser.includes('.com'))) {
        Swal.fire({
          title: ('Indique su Email, no olvides colocar el "@" y ".com".'),
          width: 600,
          padding: '0.1em',
          color: 'black',
          background: 'yellow',
          backdrop: `
                    url("https://www.gifsanimados.org/data/media/1574/exito-imagen-animada-0014.gif")
                    center top
                    no-repeat
                    `
        })
      }
           else
      {
        const usuario = {
                        id: newUsuarios.length, 
                        nombre: nombreUser,
                        edad: edadUser,
                        sexo: sexoUser,
                        email: emailUser,
                        }
        
        newUsuarios.push(usuario);
        console.log (usuario);
        localStorage.setItem('usuarios', JSON.stringify(newUsuarios));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Alta Exitosa',
          showConfirmButton: false,
          timer: 1500
        })
        borrarFormularioAlta();
      }
}

 //Ocultar formulario y vaciar los campos luego del alta de usuario.
function borrarFormularioAlta ()
{
  formularioalta.style.display = 'none';
  formularioalta['nombre'].value = '';
  formularioalta['edad'].value = '';
  formularioalta['sexo'].value = '';
  formularioalta['email'].value = '';
}
                        
  

