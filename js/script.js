function generarQR() {
  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;

  
  if (!nombre || !telefono || !correo || !direccion) {
    alert("Por favor, completa todos los campos.");
    return;
  }

 
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL:${telefono}
EMAIL:${correo}
ADR:${direccion}
END:VCARD
  `.trim();

  
  const qrContainer = document.getElementById("qrContainer");
  qrContainer.innerHTML = "";

  
  const qrCode = new QRCode(qrContainer, {
    text: vCard,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  console.log("QR generado con éxito.");
}
