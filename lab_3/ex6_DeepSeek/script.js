// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .education-card, .skills-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Валидация формы
const form = document.getElementById('feedbackForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Валидация имени
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        nameInput.classList.add('error-input');
        isValid = false;
    } else {
        nameError.style.display = 'none';
        nameInput.classList.remove('error-input');
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        emailInput.classList.add('error-input');
        isValid = false;
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('error-input');
    }

    // Валидация сообщения
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        messageInput.classList.add('error-input');
        isValid = false;
    } else {
        messageError.style.display = 'none';
        messageInput.classList.remove('error-input');
    }

    // Если форма валидна
    if (isValid) {
        // Здесь можно добавить AJAX-запрос для отправки формы
        form.reset();
        successMessage.style.display = 'block';
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
});

// Заглушка для кнопки скачивания
document.getElementById('downloadBtn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Здесь будет скачивание PDF-файла с резюме. В реальном проекте нужно подключить ссылку на файл.');
});