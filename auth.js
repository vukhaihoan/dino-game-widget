import socket from "./socket.js";
document.cookie = "cross-site-cookie1=nonCookie; SameSite=None";
socket.on("connect", () => {
    console.log("connect");
});
function submit() {
    const code = document.getElementById("verify-code").value;
    const nc = Number(code);
    socket.emit("verify user", nc, (res) => {
        if (res) {
            Cookies.set("user info", res);
            window.location = "/";
        } else {
            document.getElementById("notify").innerHTML = `Can not find User , Please enter another code`;
        }
    });
}
window.submit = submit;
