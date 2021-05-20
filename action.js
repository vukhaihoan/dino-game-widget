import socket from "./socket.js";
const CookiesUD = Cookies.getJSON("user info");
if (!CookiesUD) {
    window.location = "/auth.html";
}

if (CookiesUD) {
    console.log(CookiesUD);
}
function onStart() {
    socket.emit("onstart", CookiesUD, (res) => {});
}
function onDie() {
    socket.emit("ondie", CookiesUD, (res) => {});
}
function onRestart() {
    socket.emit("onrestart", CookiesUD, (res) => {});
}
export { onStart, onDie, onRestart };
