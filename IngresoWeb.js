const validacionUsuario = function validacionUsuario(ingresante) {
  return ingresante.usuario.length>7 && ingresante.usuario.includes(1,2,3,4,5,6,7,8,9,0);
}


const validacionEdad = function validacionEdad(ingresante) {
  return ingresante.edad >= 18
}


const validacionFinal = function validacionFinal() {
  
  let ingresante = new Object();
  ingresante.usuario = document.getElementById('usuario').value;
  ingresante.edad = document.getElementById('edad').value;
  console.log(ingresante);
  console.log(validacionUsuario(ingresante));
  console.log(validacionEdad(ingresante));
  console.log(ingresante.usuario.length>7);
  console.log(ingresante.usuario.includes(1,2,3,4,5,6,7,8,9,0));

  if (validacionEdad(ingresante) && validacionUsuario(ingresante)) {
    return window.location='index.html';
  }else{
    let alertError = document.querySelector('.alert');
    alertError.innerHTML = 'Usuario o edad incorrecto';
    alertError.classList.remove('hide');
    alertError.classList.add('show');
  }
  localStorage.setItem('usuarioNuevo', JSON.stringify(ingresante.usuario))
  // const usuarioCreado = document.querySelector("#usuarioCreado");
  // usuarioCreado.innerHTML = localStorage.getItem('usuarioNuevo');
}

const btnIngreso = document.getElementById('btnIngreso');
btnIngreso.addEventListener('click', validacionFinal);
