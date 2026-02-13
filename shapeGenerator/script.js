const countInput = document.getElementById("count");
const colorInput = document.getElementById("color");
const shapeInput= document.getElementById("shape");
const generateBtn= document.getElementById("generate");
const containerInput= document.getElementById("container");
    

generateBtn.addEventListener("click", ()=>{
    const count = Number(countInput.value);
    const color=colorInput.value;
    const shape= shapeInput.value;

    console.log("hello");

    if(count<=0 || count>100){
        alert("please enter a valid number between 1 to 100");
        return;
    }

    container.innerHTML=" ";

    for( let i=0; i<count; i++){
        // creata a new element
        const newElement=document.createElement("div");
        newElement.classList.add("newElement");
        newElement.style.backgroundColor= color;

        // add the shapes
        if(shape=='circle'){
            newElement.style.borderRadius="50%";
            newElement.style.height="100px";
            newElement.style.width="100px";

        }else if(shape=='square'){
            newElement.style.height="100px";
            newElement.style.width="100px";

        } else if(shape=='rectangle'){
            newElement.style.height="100px";
            newElement.style.width="200px";

        }

        container.appendChild(newElement);
    }
})

 