function checkSpeed() {
    let speed = parseInt(document.getElementById("speed-input").value);
    let resultElement = document.getElementById("result");
  
    if (speed < 70) {
      resultElement.textContent = "Ok";
    } else {
      let demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {
        resultElement.textContent = "License suspended";
      } else {
        resultElement.textContent = "Demerit points: " + demeritPoints;
      }
    }
  }
  