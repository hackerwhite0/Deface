document.addEventListener("DOMContentLoaded", function() {
  const prayerButton = document.querySelector(".prayerButton");
  prayerButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Your prayers have been offered to Lord Krishna.");
  });
});
