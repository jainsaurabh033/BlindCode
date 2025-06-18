function removeDifficultyTags() {
  const observer = new MutationObserver(() => {
    const allElements = document.querySelectorAll("*");

    allElements.forEach(el => {
      if (
        el.textContent === "Easy" ||
        el.textContent === "Medium" ||
        el.textContent === "Hard"
      ) {
        el.style.display = "none";
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

removeDifficultyTags();
