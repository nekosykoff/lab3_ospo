function changeSurname() {
    const input = document.getElementById('surnameInput');
    const newSurname = input.value.trim();
    if (newSurname) {
      document.getElementById('surname').textContent = `Фамилия: ${newSurname}`;
      input.value = '';
    }
  }
  
  function changeBackground() {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 90%)`;
    document.querySelector('.resume-container').style.backgroundColor = color;
  }
  
  