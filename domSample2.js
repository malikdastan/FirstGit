const form =document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi =document.createElement('li');
    const newLiText = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
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


}) 

fruits.addEventListener('click', function(event){
    if (event.target.classList.contains("delete-btn")){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})
const fruitList = document.querySelectorAll('.fruit');
for (let i = 0; i<fruitList.length; i++){
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className = 'edit-btn';
    fruitList[i].appendChild(editBtn);
}
