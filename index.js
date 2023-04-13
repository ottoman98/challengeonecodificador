function encripter() {
  const sentence = document.getElementById("sentence").value;

  const encripted = sentence
    .split("")
    .map((x) => {
      switch (x) {
        case "a":
          return "ai";
        case "e":
          return "enter";

        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";

        default:
          return x;
      }
    })
    .join("");

  document.getElementById("result").innerText = encripted;
}

function decripter() {
  const sentence = document.getElementById("sentence").value;

  const decripted = sentence
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("result").innerText = decripted.toLowerCase();
}

const copyButton = document.querySelector("#copy-button");
const textToCopy = document.querySelector("p");
const notification = document.querySelector("#notification");

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(textToCopy.textContent)
    .then(() => {
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
    })
    .catch((error) => {
      console.error("Error al copiar texto al portapapeles:", error);
    });
});
