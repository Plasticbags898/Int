function launch() {
  const input = document.getElementById('url').value;
  if (!input) return;
  window.location.href = `/libmath/${btoa(input)}`;
}