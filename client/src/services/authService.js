let baseUrl = 'http://localhost:3001'
export const login = async (email, password) => {
    let token = localStorage.getItem('accessToken');
    try {
        let response = await fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) {
            throw new Error("Requies failed");
        }
        let result = await response.json();
        return result

    } catch (error) {
        console.error('Couldn\'t login');
        return { error: 'Cannot login' }
    }
}

export const register = async (email, password) => {
    let token = localStorage.getItem('accessToken');
    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ email, password })
    });
    let result = await response.json();
    return result
}

export const logout = async () => {
    let token = localStorage.getItem('accessToken');
    const response = await fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });

    if (response.status === 204) {

        return {};
    }
};