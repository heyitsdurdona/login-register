const BASE_URL = "https://json-api.uz/api/project/fn37/"

export async function login(username, password) {
    try {
        const response = await fetch(`${BASE_URL}auth/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message || 'Login failed');
    }
}

export async function register(data) {
    const response = await fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
    }

    return await response.json();
}

