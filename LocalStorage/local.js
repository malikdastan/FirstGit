function handleFormSubmit(event){
    event.preventDefault();
    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const expenseDetails = {
        expense: expense,
        description: description,
        categpry: category
    }

    localStorage.setItem(expenseDetails.description, JSON.stringify(expenseDetails));

    /*Reset form fields 
    to empty values*/

    event.target.expense.value = '';
    event.target.description.value = '';
    event.target.category.value = '';


    displayUser(expenseDetails);
}

function displayUser(expenseDetails){
    const list = document.getElementsByTagName("ul")[0];
    const newUser = document.createElement('li');
        newUser.textContent = `${expenseDetails.expense} ${expenseDetails.description} ${expenseDetails.category}`;

        /*creating delete 
        button*/

        const deleteBtn = document.createElement('button');
        deleteBtn.type = "button";
        deleteBtn.textContent = ("Delete");
        deleteBtn.onclick = function(){
            localStorage.removeItem(expenseDetails.email);
            list.removeChild(newUser);
        }

        /*creating Edit button */

        const editBtn = document.createElement('button');
        editBtn.type = "button";
       editBtn.textContent = ("Edit");
       editBtn.onclick = function(){
        list.removeChild(newUser);
            
            const text = document.getElementById('expense');
            const email = document.getElementById('description');
            const phone = document.getElementById('category');

            const storedDetails = JSON.parse(localStorage.getItem(expenseDetails.description));
            if (storedDetails){
                text.value = storedDetails.expense;
                email.value = storedDetails.description;
                phone.value = storedDetails.category;
            }
            localStorage.removeItem(expenseDetails.description);
            
        }

        /*adding delete button & 
        Edit button 
        to the list item*/

        newUser.appendChild(deleteBtn);
        newUser.appendChild(editBtn);
        list.appendChild(newUser);
        console.log (deleteBtn);
        console.log(list);
}
