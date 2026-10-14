document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status');
  const countdownEl = document.getElementById('countdown');

  if (!statusEl || !countdownEl) {
    return;
  }

  const EVENT_DATE = new Date(Date.UTC(new Date().getFullYear(), 10, 4, 23, 0, 0));

  function formatCountdown(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  }

  function updateStatus() {
    const now = new Date();
    const year = now.getFullYear();
    const midnightEst = new Date(Date.UTC(year, 10, 4, 5, 0, 0));
    const yesTimeEst = new Date(Date.UTC(year, 10, 4, 23, 0, 0));

    if (now < midnightEst) {
      statusEl.textContent = 'NO';
      return;
    }

    if (now < yesTimeEst) {
      statusEl.textContent = 'SOON';
      return;
    }

    statusEl.textContent = 'YES';
  }

  function updateCountdown() {
    const now = new Date();
    const diff = EVENT_DATE.getTime() - now.getTime();

    if (diff <= 0) {
      countdownEl.textContent = '0d 00h 00m 00s';
      return;
    }

    countdownEl.textContent = formatCountdown(diff);
  }

  updateStatus();
  updateCountdown();
  setInterval(() => {
    updateStatus();
    updateCountdown();
  }, 1000);
});
