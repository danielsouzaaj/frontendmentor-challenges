const shareElement = document.querySelector(".share");
const shareIcon = document.querySelectorAll(".share-icon");

for (let i = 0; i < shareIcon.length; i++) {
    shareIcon[i].addEventListener("click", () => {
        shareElement.classList.contains("slide-top") ? (shareElement.classList.value = "share slide-out-bottom") : (shareElement.classList.value = "share slide-top");
    });
}