
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to my interactive portfolio.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typing").textContent += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
});
