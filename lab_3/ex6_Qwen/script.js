// Анимация появления секций при скролле
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// Валидация формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const messageBox = document.getElementById('form-message');

  if (!name || !email || !message) {
    messageBox.textContent = 'Пожалуйста, заполните все поля.';
    messageBox.style.color = 'red';
    return;
  }

  // Простая проверка email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageBox.textContent = 'Введите корректный email.';
    messageBox.style.color = 'red';
    return;
  }

  // Имитация отправки
  messageBox.textContent = 'Сообщение отправлено!';
  messageBox.style.color = 'green';

  // Очистка формы
  this.reset();
});