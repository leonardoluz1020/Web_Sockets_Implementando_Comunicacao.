/* Imports */
import { atualizaTextoEditor } from "./documento.js";
/* Variaveis */
const socket = io();

function selecionarDocumento(nome) {
    socket.emit('selecionar_documento', nome, (texto) => {
        atualizaTextoEditor(texto)    
    })
}
/* Funções */
function emitirTextoEditor(dados) {
    socket.emit('texto_editor', dados);
}

/* Metodo socket.on */
socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

/* export */
export { emitirTextoEditor, selecionarDocumento };