// Refine EP.46 and EP.49 emotional lines
(function () {
  if (!Array.isArray(window.games)) return;

  function makeResult(ending, text) {
    return `<strong>${ending}.</strong><br>${text}`;
  }

  // EP.46 · Letters From Her · Name Ending
  if (window.games[45] && Array.isArray(window.games[45].choices)) {
    const ep46NameChoice = window.games[45].choices.find(
      (choice) => choice.ending === "Name Ending"
    );

    if (ep46NameChoice) {
      ep46NameChoice.result = makeResult(
        "Name Ending",
        `The room becomes silent.

Then the Red Eye writes one word across the wall.

Not a threat.

Not a warning.

A name.

The name of someone you loved so deeply that your mind had to delete them just to keep your heart beating.`
      );
    }
  }

  // EP.49 · The Red Eye Revealed · Forgiveness Ending
  if (window.games[48] && Array.isArray(window.games[48].choices)) {
    const ep49ForgivenessChoice = window.games[48].choices.find(
      (choice) => choice.ending === "Forgiveness Ending"
    );

    if (ep49ForgivenessChoice) {
      ep49ForgivenessChoice.result = makeResult(
        "Forgiveness Ending",
        `You say it over and over.

"I'm sorry."

She smiles through the cracks of fading light.

"That was never what I needed from you," she says.

"I only needed you to stop drowning in a memory I tried so hard to save you from."`
      );
    }
  }
})();

// trigger deploy refined final emotional lines
