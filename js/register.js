import { register } from "./requests.js";
import { validator } from "./utils.js";

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
    const result = {};
    for(const [key, value] of formData.entries()){
        result[key] = value;
    }

    // Check if passwords match
    if (result.password !== result['confirm-password']) {
        showToast("danger", "Maxfiy so'zlar mos kelmadi!");
        evt.target['confirm-password'].focus();
        return;
    }

    const error = validator(result);
    if (error) {
        showToast("danger", error.message);
        evt.target[error.target].focus();
        return;
    }

    try {
        const response = await register({
            username: result.username,
            password: result.password,
            email: result.email
        });

        if (response) {
            showToast("success", "Ro'yhatdan muvaffaqiyatli o'tdingiz!");
            setTimeout(() => {
                window.location.href = "./login.html";
            }, 1000);
        }
    } catch (error) {
        if (error.message.includes('username')) {
            showToast("danger", "Bu foydalanuvchi nomi allaqachon mavjud");
        } else if (error.message.includes('email')) {
            showToast("danger", "Bu email allaqachon mavjud");
        } else {
            showToast("danger", error.message);
        }
    } finally {
        evt.target.reset();
    }
});