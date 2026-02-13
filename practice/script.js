function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+ min;
}

function randomColor(){
    return `rgb(
    ${randomNumber(0,255)},
    ${randomNumber(0,255)},
    ${randomNumber(0,255)}
    )`
}

let container = document.querySelector('.container');

container.addEventListener("click", function(event){
    console.log(event);
    const newElement= document.createElement("div"); // new element created
    newElement.classList.add("figure");   // giving id to the new element
    let size = randomNumber(20,120);
    newElement.style.width=size + 'px';
    newElement.style.height=size + 'px';
    newElement.style.backgroundColor=randomColor();

    newElement.style.top=(event.clientX - size) +"px";
    newElement.style.left=(event.clientY - size) +"px";

    container.appendChild(newElement);

    console.log(event.clientX);
    console.log(event.clientY);

    
})