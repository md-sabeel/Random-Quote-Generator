const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function generateQuote() {
  quoteText.textContent = "Loading quote...";
  quoteText.classList.add("loading");
  authorText.textContent = "";

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Failed to load quote 😢";
    authorText.textContent = "";
    console.error(error);
  } finally {
    quoteText.classList.remove("loading");
  }
}
