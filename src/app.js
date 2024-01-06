import {  success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
 
defaultModules.set(PNotifyMobile, {});

const formBtn = document.getElementById("form-btn");
const sendBtn = document.getElementById("send-btn");
const backdrop = document.querySelector(".backdrop");
const dataInputs = document.querySelectorAll("input");
let data = {};
formBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    success({ text: "Форма успішно відправлена", delay: 1000 });
    backdrop.classList.remove("visible");
    data = {
        name: dataInputs[0].textContent,
        email: dataInputs[1].textContent,
        comment: dataInputs[2].textContent
    };
    
});
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    backdrop.classList.add("visible");
});

export { data };


