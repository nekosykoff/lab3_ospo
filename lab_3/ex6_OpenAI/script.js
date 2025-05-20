document.addEventListener("DOMContentLoaded", () => {
  // Плавный скролл
  document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Появление секций при прокрутке
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Валидация формы
  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const message = document.getElementById("userMessage").value.trim();
    const feedback = document.getElementById("formMessage");

    if (!name || !email.includes("@") || message.length < 5) {
      feedback.textContent = "Пожалуйста, заполните все поля корректно.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "Спасибо за сообщение!";
    feedback.style.color = "green";
    document.getElementById("contactForm").reset();
  });
});