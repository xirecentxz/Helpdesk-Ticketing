// Link Google Apps Script kamu
const scriptURL = 'https://script.google.com/macros/s/AKfycbxS-x663wwZ4-pEgEsl9iaCRvk74urNDg1z-NRg5ZvZWYfmOBtpJYlG3qW_k300Qz4Y/exec';

const form = document.getElementById('ticketForm');
const btn = document.getElementById('submitBtn');
const msg = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Animasi tombol saat loading
    btn.disabled = true;
    btn.innerText = "Sedang Mengirim...";
    msg.innerHTML = "Menghubungi server...";

    // Mengirim data menggunakan Fetch API
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        btn.disabled = false;
        btn.innerText = "KIRIM TIKET";
        msg.innerHTML = "<span style='color: #4ade80;'>✅ Tiket Berhasil Terkirim ke Sheets!</span>";
        form.reset(); // Kosongkan form setelah sukses
    })
    .catch(error => {
        btn.disabled = false;
        btn.innerText = "KIRIM TIKET";
        msg.innerHTML = "<span style='color: #f87171;'>❌ Gagal: " + error.message + "</span>";
        console.error('Error!', error.message);
    });
});
