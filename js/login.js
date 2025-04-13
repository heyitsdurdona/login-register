import { validator } from "./utils.js";

// window.addEventListener("load", function(){
//     const user = null;

//     if (user){
//         window.location.href = "./index.html";
//     }
// });


function showToast(type, message) {
    const toast = document.getElementById(`toast-${type}`);
    const msgContainer = toast.querySelector("div.ms-3");
    msgContainer.textContent = message;

    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}


const elForm = document.getElementById('form');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
     
    const formData = new FormData(evt.target);
    const result = {};
    for(const [key, value] of formData.entries()){
        result[key] = value;
    }

    const error = validator(result);
    if (error) {
        showToast("danger", error.message);
        evt.target[error.target].focus();
        return;
    }
    showToast("success", "Muvaffaqiyatli tizimga kirdingiz!");
    evt.target.reset();
});
