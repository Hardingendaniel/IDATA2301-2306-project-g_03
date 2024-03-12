const signInButton = document.getElementById("signInButton");
const signInForm = document.getElementById("signInForm");
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const closeButton = document.getElementById("closeButton");

signInButton.addEventListener("click", () => {
    console.log("Button clicked!"); // This will print to the console
    signInForm.style.display = "block";
    overlay.classList.add("active");
});

signInButton.addEventListener("click", () => {
    signInForm.style.display = "block";
    overlay.classList.add("active");
});

closeButton.addEventListener("click", () => {
    signInForm.style.display = "none";
    overlay.classList.remove("active");
});
