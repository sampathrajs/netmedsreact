export const apiMethod = {
    post: "POST",
    put: "PUT",
    get: "GET",
    delete: "DELETE"
};
const baseUrl = "http://localhost:4000/api";


export const baseRequest = (method,endPoint,requestBody = null) => {
    let url = `${baseUrl}${endPoint}`;
    let options = {
        method: method,
        body: JSON.stringify(requestBody),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    }

    return fetch(url,options,options).then(response => {
        return response.json();
    }).catch((error) => {
        return error;
    })
};