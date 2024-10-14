//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function() {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);
  const output = document.getElementById("output");

  output.textContent = "";

  if (text && delay >= 0) {
    const delayFunction = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const displayTextWithDelay = async () => {
      await delayFunction(delay); // Wait for the specified delay
      output.textContent = text;  // Display the text
    };

    displayTextWithDelay();
  } else {
    output.textContent = "Please enter valid text and delay.";
  }
});