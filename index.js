function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}

document.getElementById("texto").addEventListener("keydown", function Enter(event) {
    if (event.key==="Enter") {
    event.preventDefault();
    setTimeout(() => {
        bot()
    }, 500)
    }
});

function mostrar(btn) {
    const chat=document.getElementById("chat");
    if (btn==1) {
        chat.className=visible;
    }
    else {if (btn==0){
        chat.className=oculto;
    }}
}

function bot() {
    const usermensaje=document.getElementById("usuario");
    const div = document.createElement('div');
    // El contenido el div es igual a al valor del textarea (la nota)
    div.textContent = textarea.value;
    // Le aplico al div la clase noNota
    div.classList.add('noNota');
    // El id noNota (que es el idv vacio en el que se guardan las notas) inserta antes el div no notas, es decir, la nota que hemos escrito en el textarea
    document.getElementById('noNota').insertBefore(div, document.getElementById('noNota').firstChild);
    textarea.value = '';
}