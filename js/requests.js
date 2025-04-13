const BASE_URL = "https://json-api.uz/api/project/fn37/"

export async function login(data){
    const response = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    
}
export async function register(data){
    const response = await fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    
}

