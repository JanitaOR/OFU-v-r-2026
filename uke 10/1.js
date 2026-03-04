console.log("1");
console.log("2");
getHarryPotterCharacters();
console.log("3");
console.log("4");

async function getHarryPotterCharacters() {
  const respons = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await respons.json();
  console.log(data);
}
