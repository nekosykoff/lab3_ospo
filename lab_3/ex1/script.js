function calculate() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    if (isNaN(a) || isNaN(b)) {
      result = "Введите оба числа.";
    } else {
      switch (operation) {
        case "min":
          result = `Минимум: ${Math.min(a, b)}`;
          break;
        case "max":
          result = `Максимум: ${Math.max(a, b)}`;
          break;
        case "equal":
          result = a === b ? "Числа равны." : "Числа не равны.";
          break;
        default:
          result = "Неизвестная операция.";
      }
    }
  
    document.getElementById('result').textContent = result;
  }
  