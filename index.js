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

document.getElementById("usuario").addEventListener("keydown", function Enter(event) {
    if (event.key==="Enter") {
    event.preventDefault();
        bot()
    }
});

function mostrar() {
    document.getElementById("cuadro").classList.remove("oculto");
    document.getElementById("chat").classList.remove("oculto");
    document.getElementById("mensaje").classList.remove("oculto");
    document.getElementById("usuario").classList.remove("oculto");
    document.getElementById("btn2").classList.remove("oculto");
}

function ocultar() {
    document.getElementById("cuadro").classList.add("oculto");
    document.getElementById("chat").classList.add("oculto");
    document.getElementById("mensaje").classList.add("oculto");
    document.getElementById("usuario").classList.add("oculto");
    document.getElementById("btn2").classList.add("oculto");
}

function bot() {
    const user=document.getElementById("usuario").value;
    const botMensaje=document.createElement("div");
    const userMensaje=document.createElement("div");
    userMensaje.textContent=user
    userMensaje.classList.add("user")
    document.getElementById("chat").insertBefore(userMensaje, document.getElementsByClassName("bot").firstChild);
    document.getElementById("usuario").value="";
    botMensaje.textContent=getRandomBotMessage();
    botMensaje.classList.add("bot")
    setTimeout(() => {
        document.getElementById("chat").insertBefore(botMensaje, document.getElementsByClassName("user").firstChild);
    }, 500)
}