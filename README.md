# 📚 English Dictionary App

A fully functional English Dictionary web application built using **HTML**, **CSS**, and **JavaScript**, with live **word meaning**, 
**phonetic pronunciation**, **examples**, and **auto-suggestions** features powered by **DictionaryAPI** and **Datamuse API**.

---

## 🌐 Live Preview

[click here](https://gautam23145032.github.io/MyDictionary/)  


---

## ✨ Features

- 🔎 **Search for English Words**
- 📖 **Get Definitions, Examples, and Part of Speech**
- 🔊 **Hear Pronunciation with Audio Playback**
- 🧠 **Clickable Synonyms for Fast Lookup**
- 💡 **Live Suggestions as You Type**
- ❌ **Clear Button to Reset Search**

---

## 🛠️ Tech Stack

| Tech         | Description                    |
|--------------|--------------------------------|
| **HTML5**    | Structure of the web app       |
| **CSS3**     | Styling and layout             |
| **JavaScript** | Functionality and API handling |
| **DictionaryAPI.dev** | For word definitions, phonetics, and examples |
| **Datamuse API** | For real-time word suggestions |

---

## 📁 Project Structure

```
📦 dictionary-app
├── 📄 index.html          # Main HTML structure
├── 📄 style.css           # Styling for the app
├── 📄 script.js           # JavaScript logic and API handling
```

---

## 🔧 Setup Instructions

To run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dictionary-app.git
   cd dictionary-app
   ```

2. **Open `index.html`** in your browser:
   - Just double-click the file, or
   - Use a live server extension (if you're using VS Code)

3. **Start typing** a word to search its meaning.


## 🧠 How It Works

### 🔤 1. Word Meaning and Pronunciation

- On pressing **Enter**, the app makes a request to:
  ```
  https://api.dictionaryapi.dev/api/v2/entries/en/<word>
  ```
- The response includes:
  - **Word**
  - **Phonetics**
  - **Part of speech**
  - **Definitions**
  - **Examples**
  - **Audio URL** for pronunciation

### 💡 2. Live Suggestions

- On typing any characters, it queries:
  ```
  https://api.datamuse.com/sug?s=<partial_word>
  ```
- Top 5 suggestions are shown in a dropdown.
- Clicking a suggestion triggers a new search.

### 🔊 3. Pronunciation Button

- When available, a 🔊 button lets you hear the word.
- Uses the HTML5 `Audio` object to play the pronunciation.

### 🧩 4. Clickable Synonyms

- If synonyms are available, they're listed and clickable.
- Clicking a synonym automatically searches for that word.

---

## 🧼 Clear Functionality

- The ❌ button clears:
  - The input field
  - Previous search results
  - Suggestions dropdown

---

## 🧪 Example Usage

1. Type: `benevolent`
2. Suggestions appear: `benevolent`, `beneficial`, `benign`, etc.
3. Press **Enter** or click `benevolent`
4. See:
   - Definition: `Well meaning and kindly`
   - Example: `"a benevolent smile"`
   - Part of Speech: `Adjective`
   - Pronunciation
   - Synonyms: `kind`, `charitable`, `compassionate`...

---

## 🚀 Future Enhancements

- Dark mode toggle
- Recent search history
- Offline cache using localStorage
- Speech-to-text input
- Language switch (multilingual dictionary)

---

## 🤝 Acknowledgements

- [DictionaryAPI.dev](https://dictionaryapi.dev/) — Free Dictionary API
- [Datamuse API](https://www.datamuse.com/api/) — For suggestion data
- [Google Fonts](https://fonts.google.com/)
- Icons by [Google Material Symbols](https://fonts.google.com/icons)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🧑‍💻 Author

Developed by **Gautam yadav**

- GitHub: [@Gautam23145032](https://github.com/Gautam23145032)

---

```


