let baseUrl = 'http://localhost:3001'
export const create = async (data) => {
    let token = localStorage.getItem('accessToken');
    console.log(token);
    let response = await fetch(`${baseUrl}/data/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem("accessToken")

        },
        body: JSON.stringify(data)
    });
    console.log(response.headers);
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

export const editCar = async (id, car) => {
    let response = await fetch(`${baseUrl}/data/catalog/${id}/edit`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(car)
    });
    let result = response.json();
    return result
}

export const removeItem = async (id) => {
    let response = await fetch(`${baseUrl}/data/catalog/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });
    if (response.status === 204) {

        return {};
    }
}
