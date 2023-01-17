
const cont = document.getElementById("visulasation")
const  newArray = document.getElementById("newArray")
const  bubble2 = document.getElementById("bubble")
const visulasation = document.getElementById("visulasation")
const selection = document.getElementById("selection")
const insertion = document.getElementById("insertion")

function swap(el1, el2) {
    console.log('In swap()');
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

const createingNewStudent = (noOfBars = 100) =>{
    newArray.disabled = true;
    bubble2.disabled = false;
    selection.disabled = false;
    insertion.disabled = false;

    
    deleteChild()

    let size = [];
    for(let j= 0;j<=100;j++){

        size.push(Math.floor(Math.random()*101))
    }
   
    for(let i=0;i<70;i++){
        let newDiv = document.createElement("div");
        newDiv.className = "newDivs"
        newDiv.style.height = `${Math.floor(size[i]*Math.random()*0.7)}vh`
        newDiv.classList.add(`barNo${i}`);
        newDiv.classList.add("divs")
        visulasation.append(newDiv)
    }
}
function deleteChild() {
    const bar = document.querySelector("#visulasation");
    bar.innerHTML = '';
}
newArray.addEventListener("click",createingNewStudent)

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}