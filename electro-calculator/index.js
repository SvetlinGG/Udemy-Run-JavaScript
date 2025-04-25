let chart;

    function calculate() {
      const pt = parseFloat(document.getElementById('pt').value);
      const gt = parseFloat(document.getElementById('gt').value);
      const gr = parseFloat(document.getElementById('gr').value);
      const fGHz = parseFloat(document.getElementById('network').value);
      const d = parseFloat(document.getElementById('dist').value);

      const c = 3e8;
      const f = fGHz * 1e9;
      const lambda = c / f;

      const numerator = lambda / (4 * Math.PI * d);
      const pr = pt * gt * gr * Math.pow(numerator, 2);

      let output = `Получената мощност Pᵣ ≈ ${pr.toExponential(2)} W`;
      if (pr < 1e-3) {
        output += ` (${(pr * 1e6).toFixed(2)} μW)`;
      } else if (pr < 1) {
        output += ` (${(pr * 1e3).toFixed(2)} mW)`;
      }
      document.getElementById('result').innerText = output;

      // Данни за графиката
      const distances = [];
      const powers = [];
      for (let i = 1; i <= 200; i += 5) {
        const n = lambda / (4 * Math.PI * i);
        const p = pt * gt * gr * Math.pow(n, 2);
        distances.push(i);
        powers.push(p * 1e6); // в μW
      }

      if (chart) chart.destroy();

      const ctx = document.getElementById('chart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: distances,
          datasets: [{
            label: 'Получена мощност (μW) спрямо разстояние',
            data: powers,
            borderColor: 'blue',
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: { display: true, text: 'Разстояние (m)' }
            },
            y: {
              title: { display: true, text: 'Мощност (μW)' },
              type: 'logarithmic',
              min: 0.01
            }
          }
        }
      });
    }