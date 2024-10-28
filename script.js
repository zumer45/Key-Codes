const elements = {
  key: document.querySelector(".key"),
  keyCode: document.querySelector(".keyCode"),
  code: document.querySelector(".code"),
  sun: document.querySelector(".sun"),
  mail: document.querySelector(".mail"),
  year: document.querySelector(".year"),
};

function display() {
  elements.key.innerHTML = "";
  elements.keyCode.innerHTML = "";
  elements.code.innerHTML = "";

  elements.key.innerHTML = currKey;
  elements.keyCode.innerHTML = currKeyCode;
  elements.code.innerHTML = currCode;
}

function sendEmail() {
  const email = "zaineumer@gmail.com";

  window.open(`mailto:${email}`);
}

function setCurrentYear() {
  const now = new Date();
  const currentYear = now.getFullYear();
  elements.year.innerHTML = ` ${currentYear} `;
}
document.body.addEventListener("keydown", (e) => {
  currKey = e.key;
  currKeyCode = e.keyCode;
  currCode = e.code;

  display();
});

elements.sun.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    elements.sun.classList.remove("fa-sun");
    elements.sun.classList.add("fa-moon");
    elements.sun.style.color = "#fff";
  } else {
    elements.sun.classList.remove("fa-moon");
    elements.sun.classList.add("fa-sun");
    elements.sun.style.color = "#FFD700";
  }
});

elements.mail.addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
});

setCurrentYear();
