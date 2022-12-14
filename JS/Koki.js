var Body = document.body;
var DatosUsuario = [1];
DatosUsuario[0] = " ";

function DarkMode() {

    Body.classList.toggle("Darkmode");

    // setTimeout(() => {
        
    // }, 400);
}

function Datos() {
    var Correo = $(".Footer_Input").val()
    var Fecha = new Date();
    var re =/^([\da-zA-Z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var Validar = 0;
    if(!re.exec(Correo)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Asegurate de escribir un texto válido!',
            footer: '<a href="https://support.google.com/accounts/thread/25868685/doy-mi-correo-y-siempre-me-dice-correo-invalido-qué-puedo-hacer?hl=es">¿Sigues con el error?</a>'
          })
	}
    else {

        for(let i = 0; i < DatosUsuario.length; i++){
           if(DatosUsuario[i] == Correo) {
                Validar = 1;
                console.log(Correo + " f");
            }
        }
        if(Validar == 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este correo está registrado ' + Correo,
              })

        }else {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Perfecto!. Registro completo',
                showConfirmButton: true,
                timer: 2500
              })
            console.log(Correo);
            console.log(Fecha);
    
            $(".Footer_Input").val(" ");

            DatosUsuario.push(Correo);
            console.log(DatosUsuario);
        }
	}
}