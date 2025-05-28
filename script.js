const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");
const suggestionsList = document.getElementById("suggestionsList");
const clearBtn = document.getElementById("clearBtn");

let audio = null; // audio variable to store pronunciation audio

// Fetch dictionary meaning
async function search(word) {
  clearSuggestions();
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.title) {
      resultDiv.innerHTML = `<p>No definition found for "${word}"</p>`;
      return;
    }

    const entry = data[0];
    const meaning = entry.meanings[0];
    const definition = meaning.definitions[0];
    const partOfSpeech = meaning.partOfSpeech;
    const phonetics = entry.phonetics.find(p => p.text)?.text || '';
    const audioUrl = entry.phonetics.find(p => p.audio)?.audio || '';

    const synonyms = definition.synonyms || meaning.synonyms || [];

    // Create clickable synonyms HTML
    let synonymsHtml = "No synonyms available.";
    if (synonyms.length > 0) {
      synonymsHtml = synonyms
        .map(
          (syn) =>
            `<span class="synonym" style="cursor:pointer; color:blue; text-decoration:underline; margin-right:6px;">${syn}</span>`
        )
        .join('');
    }

    // Pronunciation icon HTML (using a simple Unicode speaker symbol here, you can replace with an SVG or icon font)
    const pronunciationIcon = audioUrl
      ? `<span id="pronounceIcon" title="Play Pronunciation" style="cursor:pointer; margin-left: 10px; font-size:18px; color:#4D59FB;">🔊</span>`
      : '';

    resultDiv.innerHTML = `
      <h2>
        ${word} ${phonetics ? `<small>(${phonetics})</small>` : ''}
        ${pronunciationIcon}
      </h2>
      <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
      <p><strong>Definition:</strong> ${definition.definition}</p>
      <p><strong>Example:</strong> ${definition.example || "No example available."}</p>
      <p><strong>Synonyms:</strong> ${synonymsHtml}</p>
    `;

    // Set up audio object for pronunciation
    audio = new Audio(audioUrl);

    // Add click event listener to pronunciation icon to play audio
    const pronounceIconEl = document.getElementById("pronounceIcon");
    if (pronounceIconEl) {
      pronounceIconEl.addEventListener("click", () => {
        if (audio) {
          audio.play();
          // Optional: Change icon color while playing
          pronounceIconEl.style.color = "#999";
          audio.onended = () => {
            pronounceIconEl.style.color = "#4D59FB";
          };
        }
      });
    }

    // Add click event listeners to all synonyms
    const synonymElements = resultDiv.querySelectorAll('.synonym');
    synonymElements.forEach((elem) => {
      elem.addEventListener('click', () => {
        const clickedWord = elem.textContent;
        searchInput.value = clickedWord;
        search(clickedWord);
        clearSuggestions();
      });
    });
  } catch (error) {
    resultDiv.innerHTML = `<p>Error fetching the definition. Please try again later.</p>`;
  }
}

// Fetch suggestions
async function fetchSuggestions(query) {
  if (!query) {
    clearSuggestions();
    return;
  }

  const url = `https://api.datamuse.com/sug?s=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    suggestionsList.innerHTML = "";
    data.slice(0, 5).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.word;
      li.addEventListener("click", () => {
        searchInput.value = item.word;
        search(item.word);
        clearSuggestions();
      });
      suggestionsList.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching suggestions:", err);
  }
}

function clearSuggestions() {
  suggestionsList.innerHTML = "";
}

searchInput.addEventListener("keyup", (e) => {
  const word = e.target.value.trim();
  if (e.key === "Enter" && word !== "") {
    search(word);
    clearSuggestions();
  } else {
    fetchSuggestions(word);
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  resultDiv.innerHTML = "";
  clearSuggestions();
});
