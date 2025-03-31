// Trigger fetchData() when the Enter key is pressed
document.addEventListener("keydown", (event) => {
  const pokemonNameInput = document.getElementById("pokemonName");

  if (event.key === "Enter" && document.activeElement === pokemonNameInput) {
    fetchData(); // Call the fetchData function
  }
});

// Function to fetch Pokémon data
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    const whoisThat = document.getElementById("whoisThat");
    const imgElement = document.getElementById("pokemonSprite");
    const uncomfortableAwkward = document.getElementById(
      "uncomfortableAwkward"
    );

    if (!response.ok) {
      // Hide the image
      imgElement.style.display = "none";

      // Show the error message
      whoisThat.style.display = "block";
      whoisThat.style.marginTop = "10px";
      whoisThat.innerHTML = "<h2>Who is that 🙄?</h2>";
      uncomfortableAwkward.style.display = "block";

      // Play the "Among Us" sound
      const amongUsAudio = new Audio("./sounds/among-us-sound.mp3");
      amongUsAudio.play();

      throw new Error("Who is that 🙄");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;

    if (pokemonSprite) {
      // Show the Pokémon sprite
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
      uncomfortableAwkward.style.display = "none";
      // Hide the error message
      whoisThat.style.display = "none";
      whoisThat.textContent = "";
    } else {
      // Hide the image
      imgElement.style.display = "none";
      uncomfortableAwkward.style.display = "none";
      // Show the error message
      whoisThat.style.display = "block";
      whoisThat.textContent = "Who is that 🙄";

      // Play the "Among Us" sound
      const amongUsAudio = new Audio("./sounds/among-us-sound.mp3");
      amongUsAudio.play();
    }
  } catch (error) {
    const imgElement = document.getElementById("pokemonSprite");
    const whoisThat = document.getElementById("whoisThat");

    // Hide the image and show the error message
    imgElement.style.display = "none";
    whoisThat.style.display = "block";

    // Play the "Among Us" sound
    const amongUsAudio = new Audio("./sounds/among-us-sound.mp3");
    amongUsAudio.play();

    console.error(error);
  }
}

const fetchData_2 = document.getElementById("fetchData_2");

fetchData_2.addEventListener("click", () => {
  const popAudio = new Audio("./sounds/pop.mp3");
  popAudio.play();
});

// Initialize AOS on DOM content load
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 120,
  });
});
