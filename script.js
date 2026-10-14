const statusEl = document.getElementById('status');

function getStatusText() {
  const now = new Date();
  const year = now.getFullYear();

  const noDeadline = new Date(Date.UTC(year, 10, 4, 5, 0, 0));
  const yesDeadline = new Date(Date.UTC(year, 10, 4, 23, 0, 0));

  if (now < noDeadline) {
    return { text: 'NO', className: 'no' };
  }

  if (now < yesDeadline) {
    return { text: 'SOON', className: 'soon' };
  }

  return { text: 'YES', className: 'yes' };
}

function updateStatus() {
  const { text, className } = getStatusText();
  statusEl.textContent = text;
  statusEl.className = `status ${className}`;
}

updateStatus();

setInterval(updateStatus, 1000 * 30);
