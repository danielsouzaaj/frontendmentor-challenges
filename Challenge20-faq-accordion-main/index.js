const accordion = document.querySelectorAll(".accordion");
let accordionActive;

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      accordionActive &&
      accordionActive !== item &&
      accordionActive.classList.contains("active")
    ) {
      accordionActive.classList.remove("active");
      let panelActive = accordionActive.nextElementSibling;
      panelActive.style.display = "none";
    }

    item.classList.toggle("active");

    let panel = item.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    accordionActive = item;
  });
});
