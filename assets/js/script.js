
let lang = "en";

const texts = {
  en: {
    typing: "Hi, I'm Bayasaa 👨‍💻",
    about: "I’m a Database Administrator and Cloud Engineer with 9+ years of experience."
  },
  mn: {
    typing: "Сайн байна уу, би Баясаа 👨‍💻",
    about: "Би 9+ жилийн туршлагатай өгөгдлийн сангийн мэргэжилтэн, клоуд инженер."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  typeText(texts[lang].typing);
  document.getElementById("about-text").innerText = texts[lang].about;
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
  document.getElementById("about-text").innerText = texts[lang].about;
}
