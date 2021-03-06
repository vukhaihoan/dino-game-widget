import socket from "./socket.js";

socket.on("connect", () => {
    console.log("connect");
});

function submit() {
    const code = document.getElementById("verify-code").value;
    const nc = Number(code);
    socket.emit("verify user", nc, (res) => {
        if (res) {
            Cookies.set("user info", res, { sameSite: "None", secure: true });
            window.location = "/";
        } else {
            document.getElementById("notify").innerHTML = `Can not find User , Please enter another code`;
        }
    });
}
window.submit = submit;
