let currentQuestionIndex = 0;
const totalQuestions = 5;

document.addEventListener("DOMContentLoaded", () => {
  const nextQuestionBtn = document.getElementById("next-question-btn");
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex >= totalQuestions) {
        // Redirect to result.html after last question
        window.location.href = "result.html";
      } else {
        // Load next question logic here (if implemented)
        // For now, just update progress indicator and disable button
        const progressIndicator = document.getElementById("progress-indicator");
        if (progressIndicator) {
          progressIndicator.textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`;
        }
        nextQuestionBtn.disabled = true;
      }
    });
  }

  // Example: Enable next button when an answer is selected
  const answersForm = document.getElementById("answers-form");
  if (answersForm) {
    answersForm.addEventListener("change", () => {
      if (nextQuestionBtn) {
        nextQuestionBtn.disabled = false;
      }
    });
  }
});

function togglePasswordVisibility() {
  const input = document.getElementById("password");
  const icon = document.getElementById("eye-icon");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.add("showing");
  } else {
    input.type = "password";
    icon.classList.remove("showing");
  }
}

