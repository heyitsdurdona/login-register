import { validator } from "./utils.js";
import { login } from "./requests.js";

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

elForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    
    const formData = new FormData(evt.target);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || !password) {
        showToast("danger", "Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }
    
    try {        
        const response = await login(username, password);
        
        if (response) {
            localStorage.setItem('user', JSON.stringify(response));
            showToast("success", "Muvaffaqiyatli tizimga kirdingiz!");
            setTimeout(() => {
                window.location.href = "/index.html";
            }, 1000);
        } else {
            showToast("danger", "Foydalanuvchi topilmadi yoki noto'g'ri maxfiy so'z");
        }
    } catch (error) {
        showToast("danger", error.message);
    } 

    evt.target.reset();
});
