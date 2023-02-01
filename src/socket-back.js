import io from "./servidor.js";

io.on('connection', (socket) => {

    console.log(`Um cliente se conectou! com o id: ${socket.id}`);

    socket.on('selecionar_documento', (nomeDocumento) => {
        socket.join(nomeDocumento);
    })

    socket.on('texto_editor', (texto) => {
        // socket.broadcast.emit('texto_editor_clientes', texto);
        socket.to('JavaScript').emit('texto_editor_clientes', texto)
    });

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });

})