let baseUrl = 'http://localhost:3001'
export const create = async ({ id, email, text }) => {
    let response = await fetch(`${baseUrl}/data/catalog/${id}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem("accessToken")

        },
        body: JSON.stringify({ id, email, text })
    });
    let result = await response.json();
    return result
}

export const getAll = async (id) => {
    let response = await fetch(`${baseUrl}/data/catalog/${id}/comments`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',


        }
    });
    let result = await response.json();
    return result
    
}