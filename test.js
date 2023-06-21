function test(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    // var user = localStorage.setItem("username", username);
    // var em = localStorage.setItem("email", email);
    // var pass = localStorage.setItem("password", password);

    const obj = {
        username,
        email,
        password
    }
    axios.post("https://crudcrud.com/api/c32d3fdfbf9f496c9961c2c16e62306c/appoinmentdata", obj)
        .then((respone) => {
            showUserOnScreen(respone.data)
            console.log(respone)
        })
        .catch((err)=>{
            console.log(err)
        })
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showUserOnScreen(obj);
}

    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/c32d3fdfbf9f496c9961c2c16e62306c/appoinmentdata")
            .then((response) => {
                console.log(response)
                for(var i = 0; i<response.data.length; i++)
                {
                    showUserOnScreen(response.data[i])
                }
            })
            .catch((error) => {
                console.log(error)
            })
    })


function showUserOnScreen(obj){
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.username + ' - ' + obj.email+ ' - '+ obj.password;
    parentElem.appendChild(childElem);

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick= () =>{
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }

    childElem.appendChild(deleteButton);
}