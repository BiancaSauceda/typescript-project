// Importing JSON datasets
(async () => {
  const themeBox = await fetch('components/themeBox.json').then(res => res.json());
  const mediumBox = await fetch('components/mediumBox.json').then(res => res.json());
  const emotionBox = await fetch('components/emotionBox.json').then(res => res.json());

  // Random helper function
  function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Prompt generator function
  function generateArtFizzPrompt() {
    const theme = pickRandom(themeBox);
    const medium = pickRandom(mediumBox);
    const emotion = pickRandom(emotionBox);
    return `Create a ${medium} piece based on "${theme}", inspired by ${emotion}.`;
  }

  // DOM elements
  const button = document.getElementById('generate-btn');
  const output = document.getElementById('prompt-output');

  function showPrompt() {
    const prompt = generateArtFizzPrompt();
    if (output) output.textContent = prompt;
  }

  // Event binding
  if (button) {
    button.addEventListener('click', showPrompt);
  }
})();
