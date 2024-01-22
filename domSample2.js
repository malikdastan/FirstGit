/* Adding new 
fruits functionality 
to the existing app */

const form =document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const descriptionToAdd = document.getElementById('description-to-add');
    const newLi =document.createElement('li');
    const newLiText = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    if (descriptionToAdd.value){
        const descriptionText = document.createElement('p');
        descriptionText.textContent = descriptionToAdd.value;
        descriptionText.style.fontStyle = "italic";
        newLi.appendChild(descriptionText);
    }
    newLi.className ='fruit';
    const deleteBtn= document.createElement('button');
    const deleteBtnText= document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    newLi.appendChild (deleteBtn);
    deleteBtn.className = 'delete-btn';
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-Btn';
    newLi.appendChild(editBtn);
    fruits.appendChild(newLi);

    fruitToAdd.value="";
    descriptionToAdd.value="";


}) 
/* Adding remove 
functionality to the 
existing app */

fruits.addEventListener('click', function(event){
    if (event.target.classList.contains("delete-btn")){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})
/* Adding edit button 
functionality to the 
existing app */
const fruitList = document.querySelectorAll('.fruit');
for (let i = 0; i<fruitList.length; i++){
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    fruitList[i].appendChild(editBtn);
}
/* Adding filter 
functionality to the 
existing */

const filter = document.getElementById('filter');
filter.addEventListener('keyup', function (e) {
    const textEntered = e.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');
    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = (fruitItems[i].firstChild || {}).textContent;
        const currentDescriptionText = (fruitItems[i].querySelector('p') || {}).textContent;
        // console.log(currentDescriptionText);
        const isVisible = currentFruitText && (currentFruitText.toLowerCase().includes(textEntered) || (currentDescriptionText || '').toLowerCase().includes(textEntered));
        fruitItems[i].style.display = isVisible ? "flex" : "none";
    }
});

/* Adding description 
input functionality 
to the existing */

const description = document.createElement('input');
description.setAttribute('type', 'text');
description.setAttribute('name', 'description');
description.setAttribute('id', 'description-to-add');
description.setAttribute('placeholder', 'Description');
form.insertBefore(description,form.lastElementChild);
// console.log(form);







