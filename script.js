let qr;

function generateQR() {
    const ssid = document.getElementById("ssid").value.trim();
    const password = document.getElementById("password").value.trim();
    const security = document.getElementById("security").value;

    if (!ssid) {
        alert("Please enter WiFi name (SSID)");
        return;
    }

    const wifiQR = `WIFI:T:${security};S:${ssid};P:${password};;`;

    document.getElementById("qrcode").innerHTML = "";

    qr = new QRCode(document.getElementById("qrcode"), {
        text: wifiQR,
        width: 200,
        height: 200,
    });

    document.getElementById("downloadBtn").style.display = "block";
}

function downloadQR() {
    const img = document.querySelector("#qrcode img");
    if (!img) return;

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "wifi-qr-code.png";
    link.click();
}
