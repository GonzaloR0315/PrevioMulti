const firebaseConfig = {
    apiKey: "AIzaSyBsPXY0OtBhYcLPBLTNf8YRytI0z7jfv5s",
    authDomain: "multiaventuras-111d7.firebaseapp.com",
    projectId: "multiaventuras-111d7",
    storageBucket: "multiaventuras-111d7.appspot.com",
    messagingSenderId: "243957207615",
    appId: "1:243957207615:web:e816d5525ccc2e31b6de8a"
  };
  firebase.initializeApp(firebaseConfig);
var refReserva = firebase.database().ref('Reservas')

document.addEventListener('DOMContentLoaded', function() {
    var abrirModal = document.getElementById('nuevaReserva');
    var modal = document.getElementById('modal');
    var cerrar1 = document.getElementById('cerrar1');
    var cerrar2 = document.getElementById('cerrar2');
    var formulario = document.getElementById('registro')

    var mostrarModal = () => {
        modal.classList.toggle('is-active');
    }

    

    abrirModal.addEventListener('click', mostrarModal);
    cerrar1.addEventListener('click', mostrarModal);
    cerrar2.addEventListener('click', mostrarModal);
    formulario.addEventListener('submit', (e)=>{
        e.preventDefault()
        var usuario = formulario['usuario'].value;
        var actividad = formulario['actividad'].value;
        var integrantes = formulario['integrantes'].value;
        var duracion = formulario['duracion'].value;
        var precio = formulario['precio'].value;
        var descripcion = formulario['descripcion'].value;

        var registrarReserva = refReserva.push()
        console.log(registrarReserva)
        registrarReserva.set({
            //Uid : registrarReserva.path.pieces_[1],
            Usuario : usuario,
            Actividad: actividad,
            Integrantes: integrantes,
            Duracion: duracion,
            Precio: precio,
            Descripcion: descripcion
        })
    })
    mostrarModal()
});



