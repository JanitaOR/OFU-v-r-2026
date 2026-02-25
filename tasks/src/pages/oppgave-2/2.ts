const starBtn = document.getElementById("start-button") as HTMLButtonElement;

starBtn.addEventListener("click", guessPassword);

function guessPassword() {
  const secretPassword: string = "heipådeg";

  const userPassword: string | null = prompt("Gjett et hemmelig passord!");

  if (userPassword === secretPassword) {
    alert("riktig passord");
  } else {
    alert("passordet er feil");
  }
}
