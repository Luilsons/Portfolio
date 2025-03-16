document.addEventListener("DOMContentLoaded", function () {
    const changingText = document.querySelector(".changing__text");
    const texts = ["Node", "JavaScript", "Python"];
    let index = 0;
  
    setInterval(function () {
      changingText.style.opacity = 0;
  
      setTimeout(function () {
        changingText.textContent = texts[index];
        changingText.style.opacity = 1;
      }, 500);
      index = (index + 1) % texts.length;
    }, 2000);
  });
  