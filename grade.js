function calculateGrade() {
    let marks = parseInt(document.getElementById("marks-input").value);

    if (marks >= 80) {
      document.getElementById("grade-output").textContent = "Grade: A";
    } else if (marks >= 60 && marks < 80) {
      document.getElementById("grade-output").textContent = "Grade: B";
    } else if (marks >= 50 && marks < 60) {
      document.getElementById("grade-output").textContent = "Grade: C";
    } else if (marks >= 40 && marks < 50) {
      document.getElementById("grade-output").textContent = "Grade: D";
    } else {
      document.getElementById("grade-output").textContent = "Grade: E";
    }
  }
