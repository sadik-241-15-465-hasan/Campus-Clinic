document.querySelectorAll('[data-role]').forEach(btn => {
  btn.addEventListener('click', () => {
    const role = btn.dataset.role;
    window.location.href = `/login-${role}.html`;
  });
});
document.querySelectorAll('[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    window.location.href = `/action-${action}.html`;
  });
});