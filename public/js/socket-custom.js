var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
// escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});
//para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jorge Armando',
    mensaje:  'Hola!'
 }, function(resp){
     console.log('Respuesta del servidor: ', resp);
 });

 socket.on('enviarMensaje',function(mensaje) {
        console.log('Servidor: ', mensaje);
 });

