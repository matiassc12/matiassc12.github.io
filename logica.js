function isMobile() {
    return navigator.maxTouchPoints > 0 && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}


function showContentBasedOnDevice() {
    var qrContainer = document.getElementById('qrContainer');
    var downloadLink = document.getElementById('downloadLink');

    if (isMobile()) {
        
        if (qrContainer) {
            qrContainer.style.display = 'none';
        }

        if (downloadLink) {
            downloadLink.style.display = 'block';
        }
    } else {
       
        if (qrContainer) {
            qrContainer.style.display = 'block';
        }

        if (downloadLink) {
            downloadLink.style.display = 'none';
        }

        
        alert('¡Recomendamos abrir esta página en un dispositivo móvil para obtener la mejor experiencia!');
    }
}


window.onload = showContentBasedOnDevice;


function downloadApk() {
    var apkLink;
    if (isMobile()) {
        
        apkLink = 'archivos/apk/app-debug.apk';
    } else {
        
        apkLink = 'archivos/apk/app-debug.apk';
    }

    
    window.location.href = apkLink;
}
