<script>
  function setMood(mood) {

    const result = document.getElementById("result");
    const history = document.getElementById("history");
    const quote = document.getElementById("quote");

    const date = new Date().toLocaleString();

    result.innerHTML = "Current Mood: " + mood;

    // Motivational quotes
    let message = "";

    if (mood.includes("Happy")) {
        message = "Keep shining, your happiness is contagious ✨";
    }

    else if (mood.includes("Stressed")) {
        message = "Breathe deeply. You are stronger than your stress 💙";
    }

    else if (mood.includes("Irritated")) {
        message = "It's okay to pause and protect your peace 🌸";
    }

    else if (mood.includes("Sad")) {
        message = "Better days are coming. Be gentle with yourself 💕";
    }

    else if (mood.includes("Angry")) {
        message = "Take a moment to cool down. Peace looks good on you 🌿";
    }

    quote.innerHTML = message;

    const li = document.createElement("li");
    li.textContent = mood + " - " + date;

    history.appendChild(li);
}
</script>

