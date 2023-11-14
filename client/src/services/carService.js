let baseUrl = 'http://localhost:3001'
export const create = async (data) => {
    let response = await fetch(`${baseUrl}/data/catalog`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    let result = await response.json();
    return result
}