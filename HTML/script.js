window.addEventListener('load', function() {
    var currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
        // Manhã
        document.body.style.backgroundColor = '#ffe6cc';
        document.getElementById('content').style.backgroundColor = '#fff';
    } else if (currentTime >= 12 && currentTime < 18) {
        // Tarde
        document.body.style.backgroundColor = '#ccf2ff';
        document.getElementById('content').style.backgroundColor = '#e6f2ff';
    } else {
        // Noite
        document.body.style.backgroundColor = '#333';
        document.getElementById('content').style.backgroundColor = '#666';
        document.body.style.color = '#fff';
    }
});