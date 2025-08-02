const quotes = [
  "Every day is a new opportunity.",
  "Dream big.",
  "You are stronger than you think."
];
const btn = document.getElementById("new");
const div = document.getElementById("quote");
btn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * quotes.length);
  div.textContent = quotes[idx];
});
