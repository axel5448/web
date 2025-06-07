// Fecha del evento: 25 de diciembre de 2025 a las 00:00
const eventDate = new Date(2025, 11, 25, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  const countdownElement = document.getElementById("countdown");

  if (diff <= 0) {
    countdownElement.innerText = "¡Ya llegó el gran día, lo que antes era un sueño hoy es realidad.! 🎊";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  countdownElement.innerText = 
    `${days} días, ${hours} h, ${minutes} min, ${seconds} seg`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
