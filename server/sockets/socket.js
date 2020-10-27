const { io } = require('../server');

io.on =('connection', (client) =>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mesnaje: 'Bienvenido a la app!'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);

        client.broadcast.emit('enviaMensaje', data);
        console.log(mensaje);
            callback();
    });


});