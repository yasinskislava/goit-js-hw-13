const formBtn = document.getElementById("form-btn");
const sendBtn = document.getElementById("send-btn");
const backdrop = document.querySelector(".backdrop");
const dataInputs = document.querySelectorAll("input");
let data = {};
formBtn.addEventListener("submit", () => {
    backdrop.style.display = "none";
});
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    backdrop.style.display = "flex";
    data = {
        name: dataInputs[0].textContent,
        email: dataInputs[1].textContent,
        comment: dataInputs[2].textContent
    };
});

export { data };


