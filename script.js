const apiUrl = "https://api.consumet.org/anime/zoro";

async function loadTrending() {
  try {
    const res = await fetch(`${apiUrl}/trending`);
    const data = await res.json();

    const container = document.getElementById("anime-list");
    container.innerHTML = "";

    data.results.forEach(anime => {
      const card = document.createElement("div");
      card.className = "anime-card";
      card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}" />
        <h3>${anime.title}</h3>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading anime:", err);
  }
}

loadTrending();
