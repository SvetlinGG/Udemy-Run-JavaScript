function calculate() {
    const pt = parseFloat(document.getElementById('pt').value);
    const gt = parseFloat(document.getElementById('gt').value);
    const gr = parseFloat(document.getElementById('gr').value);
    const fGHz = parseFloat(document.getElementById('freq').value);
    const d = parseFloat(document.getElementById('dist').value);

    const c = 3e8; // Скорост на светлината
    const f = fGHz * 1e9; // GHz -> Hz
    const lambda = c / f;

    const numerator = lambda / (4 * Math.PI * d);
    const pr = pt * gt * gr * Math.pow(numerator, 2); // в W

    let output = `Получената мощност Pᵣ ≈ ${pr.toExponential(2)} W`;

    if (pr < 1e-3) {
      output += ` (${(pr * 1e6).toFixed(2)} μW)`;
    } else if (pr < 1) {
      output += ` (${(pr * 1e3).toFixed(2)} mW)`;
    }

    document.getElementById('result').innerText = output;
  }