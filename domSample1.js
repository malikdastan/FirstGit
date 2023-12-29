const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign ="right";
const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor="grey";
fruits.style.padding="30px";
fruits.style.margin="30px";
fruits.style.borderRadius="5px";
fruits.style.listStyleType="none";
const basketHeding = document.querySelector("h2");
basketHeding.style.marginleft = "30px";

const fruitItems = document.querySelectorAll(".fruit");
for (let i=0; i<fruitItems.length; i++){
fruitItems[i].style.backgroundColor = "white";
fruitItems[i].style.padding = "10px";
fruitItems[i].style.margin= "10px";
fruitItems[i].style.borderRadius="5px";
}

const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i<evenFruitItems.length; i++){
        evenFruitItems[i].style.backgroundColor = "brown";
}

const oddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i<evenFruitItems.length; i++){
    evenFruitItems[i].style.backgroundColor = "white";
}