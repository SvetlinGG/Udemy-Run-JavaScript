function simulateRabbits(months) {
    let output = document.getElementById('output');
    let fib = [1, 1]; // месец 1 и 2

    for (let i = 2; i < months; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    for (let i = 0; i < months; i++) {
      const div = document.createElement('div');
      div.classList.add('month');
      let emojis = '';
      for (let j = 0; j < fib[i]; j++) {
        emojis += '🐇';
      }
      div.innerHTML = `<strong>Месец ${i + 1}:</strong> <span class="rabbits">${emojis}</span> (${fib[i]} двойки)`;
      output.appendChild(div);
    }
  }

  simulateRabbits(10); // показваме 10 месеца