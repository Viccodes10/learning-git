// fetch api method
// endpoint (https://reqres.in/api/users)

// GET request

fetch("https://reqres.in/api/users")
    .then(res => {
        if (res.ok) {console.log("GET request successful")}
        else {console.log("GET request unsuccessful")}
        return res;
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(er => console.log(er));


