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

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/data/catalog`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let result = response.json();
    return result
}

export const getOne = async (id) => {
    let response = await fetch(`${baseUrl}/data/catalog/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let result = response.json();
    return result
}