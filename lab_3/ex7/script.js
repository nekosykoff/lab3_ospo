document.addEventListener('DOMContentLoaded', function() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const resultDisplay = document.getElementById('result');
  const operationBtns = document.querySelectorAll('.operation-btn');
  const numberBtns = document.querySelectorAll('.number-btn');
  const calculateBtn = document.getElementById('calculate-btn');
  const clearBtn = document.getElementById('clear-btn');
  const operationDisplay = document.getElementById('operation-display');
  
  let currentOperation = null;
  let activeInput = num1Input;
  
  // Выделяем активное поле ввода
  num1Input.addEventListener('focus', () => {
      activeInput = num1Input;
      num1Input.select();
  });
  
  num2Input.addEventListener('focus', () => {
      activeInput = num2Input;
      num2Input.select();
  });
  
  // Обработчики для кнопок операций
  operationBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          currentOperation = btn.getAttribute('data-operation');
          // Заменяем символы для красивого отображения
          const displaySymbol = {
              '+': '+',
              '-': '-',
              '*': '×',
              '/': '÷'
          }[currentOperation];
          operationDisplay.textContent = displaySymbol;
          
          // Автоматически переключаемся на второе поле
          if (num1Input.value && !num2Input.value) {
              num2Input.focus();
          }
      });
  });
  
  // Обработчики для цифровых кнопок
  numberBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          const number = btn.getAttribute('data-number');
          
          if (btn.id === 'clear-btn') {
              clearAll();
              return;
          }
          
          if (number === '.' && activeInput.value.includes('.')) {
              return;
          }
          
          // Если поле пустое и вводится 0, игнорируем
          if (activeInput.value === '' && number === '0') {
              return;
          }
          
          activeInput.value += number;
      });
  });
  
  // Обработчик кнопки "Посчитать"
  calculateBtn.addEventListener('click', calculateResult);
  
  // Функция вычисления результата
  function calculateResult() {
      if (!currentOperation) {
          resultDisplay.textContent = 'Выберите операцию';
          return;
      }
      
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      
      if (isNaN(num1)) {
          resultDisplay.textContent = 'Введите первое число';
          return;
      }
      
      if (isNaN(num2)) {
          resultDisplay.textContent = 'Введите второе число';
          return;
      }
      
      let result;
      switch (currentOperation) {
          case '+':
              result = num1 + num2;
              break;
          case '-':
              result = num1 - num2;
              break;
          case '*':
              result = num1 * num2;
              break;
          case '/':
              if (num2 === 0) {
                  resultDisplay.textContent = 'На ноль делить нельзя';
                  return;
              }
              result = num1 / num2;
              break;
      }
      
      // Округляем до 4 знаков после запятой
      result = Math.round(result * 10000) / 10000;
      
      // Проверка на результат больше 15
      if (result > 15) {
          resultDisplay.textContent = '>15';
          resultDisplay.classList.add('high');
      } else {
          resultDisplay.textContent = result.toString();
          resultDisplay.classList.remove('high');
      }
  }
  
  // Функция полной очистки
  function clearAll() {
      num1Input.value = '';
      num2Input.value = '';
      resultDisplay.textContent = '';
      resultDisplay.classList.remove('high');
      currentOperation = null;
      operationDisplay.textContent = '?';
      num1Input.focus();
  }
  
  // Очистка по двойному клику на поле результата
  resultDisplay.addEventListener('dblclick', clearAll);
  
  // Очистка при нажатии Esc
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          clearAll();
      } else if (e.key === 'Enter') {
          calculateResult();
      }
  });
});