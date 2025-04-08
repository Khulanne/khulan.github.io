
let lang = "en";

const texts = {
  en: {
    typing: "Hi, I'm Bayasaa 👨‍💻"
  },
  mn: {
    typing: "Сайн байна уу, би Баясаа 👨‍💻"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  typeText(texts[lang].typing);
});

function typeText(text) {
  let i = 0;
  const target = document.getElementById("typing-text");
  target.innerText = "";
  function type() {
    if (i < text.length) {
      target.innerText += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

function toggleLanguage() {
  lang = lang === "en" ? "mn" : "en";
  typeText(texts[lang].typing);
}
