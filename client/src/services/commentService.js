let baseUrl = 'http://localhost:3001'
export const create = async ({ id, email, text }) => {
    let response = await fetch(`${baseUrl}/data/catalog/${id}`, {
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
