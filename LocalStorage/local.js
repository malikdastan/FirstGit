function handleFormSubmit(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username: name,
        email: email,
        phone: phone
    }

    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    displayUser(userDetails);
}

function displayUser(userDetails){
    const list = document.getElementsByTagName("ul")[0];
    const newUser = document.createElement('li');
        newUser.textContent = userDetails.username + " " + userDetails.email +" "+ userDetails.phone;

        /*creating delete 
        button*/

        const deleteBtn = document.createElement('button');
        deleteBtn.type = "button";
        deleteBtn.textContent = ("Delete");
        deleteBtn.onclick = function(){
            localStorage.removeItem(userDetails.email);
            list.removeChild(newUser);
        }
        /*adding delete button
        to the list item*/

        newUser.appendChild(deleteBtn);
        list.appendChild(newUser);
        console.log (deleteBtn);
        console.log(list);
}
