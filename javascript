<script>
  function setMood(mood) {
    const result = document.getElementById("result");
    const history = document.getElementById("history");

    const date = new Date().toLocaleString();

    result.innerHTML = "Current Mood: " + mood;

    const li = document.createElement("li");
    li.textContent = mood + " - " + date;

    history.appendChild(li);
}
</script>

