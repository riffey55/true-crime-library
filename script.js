// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fake search (placeholder)
document.getElementById("searchBtn").addEventListener("click", () => {
  const q = document.getElementById("site-search").value.trim();
  if (!q) return alert("Type something to search 🙂");
  alert(`Search coming soon!\nQuery: ${q}`);
});

// Poll submit
const pollForm = document.getElementById("pollForm");
const pollThanks = document.getElementById("pollThanks");
pollForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const choice = new FormData(pollForm).get("poll");
  if (!choice) return alert("Please pick an option.");
  pollThanks.classList.remove("hidden");
});

// Newsletter submit (fake)
document.getElementById("subForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("subEmail").value.trim();
  if (!email) return;
  document.getElementById("subThanks").classList.remove("hidden");
});
