function submitForm() {
  let name = document.getElementById('name').value.trim();
  let age = document.getElementById('age').value.trim();
  let gender = document.getElementById('gender').value.trim().toUpperCase();
  let consent = document.getElementById('consent').checked;

  if (!name.match(/^[А-Яа-яA-Za-z\s]+$/)) {
    alert("Введите корректное имя.");
    return;
  }

  age = Number(age);
  if (!Number.isInteger(age) || age < 0) {
    alert("Введите корректный возраст (целое неотрицательное число).");
    return;
  }

  if (age < 21 || age > 50) {
    alert("Мы принимаем сотрудников в возрасте от 21 до 50 лет.");
    return;
  }

  if (!(gender === 'М' || gender === 'Ж')) {
    alert("Пол должен быть 'М' или 'Ж'.");
    return;
  }
  if (!consent) {
    alert("Необходимо согласие на обработку данных.");
    return;
  }

  document.getElementById('form').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');

  const summary = `Имя: ${name}<br>Возраст: ${age}<br>Пол: ${gender}`;
  document.getElementById('summary').innerHTML = summary;

  document.querySelectorAll('.skill').forEach(el => el.disabled = true);
}

function check() {
  const skills = Array.from(document.querySelectorAll('.skill:checked')).map(e => e.value);
  const result = document.getElementById('checkResult');

  const hasDegree = skills.includes('degree');
  const otherSkills = skills.filter(s => s !== 'degree');

  if (hasDegree && otherSkills.length >= 2) {
    result.textContent = "Вы подходите!";
  } else {
    result.textContent = "У вас недостаточно навыков.";
  }
}