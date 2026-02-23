
let qr; //vARIABLE GLOBAL PARA EL MANIPUILAR EL QR

function generarQR(){
    const container = document.getElementById('qrCode'); //OBTENEMOS EL CONTENEDOR DONDE SE MOSTRARA EL QR
    container.innerHTML = '';

    let url = document.getElementById('url').value; //OBTENEMOS EL VALOR DEL INPUT DONDE EL USUARIO INGRESA LA URL

    qr = new QRCode(container,{ //generamos el QR con la libreria QRCode
        text: url,
        width: 350,
        height: 350
    });
    
}

function descargarQR(){
     const qrContainer = document.getElementById("qrCode"); //OBTENEMOS EL CONTENEDOR DONDE SE MOSTRO EL QR

    const img = qrContainer.querySelector("img"); //Intentamos obtener la imagen del QR generado
    const canvas = qrContainer.querySelector("canvas"); //Si no hay imagen, intentamos obtener el canvas del QR generado
    let url;

    if (img) { //Verificar que el qr exista
        url = img.src;
    } else if (canvas) {
        url = canvas.toDataURL("image/png");
    } else {
        alert("Primero genera el QR");
        return;
    }

    const link = document.createElement("a"); //Crear un enlace para descargar la imagen
    link.href = url;
    link.download = "codigo-qr.png";//Nombre del archivo a descargar
    link.click();//Simular un clic en el enlace para iniciar la descarga
}
