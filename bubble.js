const  bubble = document.getElementById("bubble")


const bubbleSort = async() => {
    newArray.disabled = false;
  bubble2.disabled = true;
  selection.disabled = true;
  insertion.disabled = true;

    let ele = document.querySelectorAll(".divs");
        for(let i = 0;i<ele.length-1;i++){
            for(let j=0;j<ele.length-i-1;j++){
                ele[j].style.background = "blue"
                ele[j+1].style.background = "rgb(186, 54, 20)"
                if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                    console.log("i am inside",ele[i].style.height)
                    try{
                        await waitforme(50);
                        swap(ele[j],ele[j+1])
                    }
                    catch(error) {
                        console.log(error);
                    }  
                }
                ele[j].style.background = "yellow"
                ele[j+1].style.background = "yellow"
            }
            ele[ele.length-1-i].style.background = 'green';
        }
        // console.log(parseInt(ele[1].style.height));
}

bubble.addEventListener("click", bubbleSort)
   

// bubbleSort()




























// const bubbleSort = () => {
//     for(var i=0;i<array_size-1;i++)
//     {
//         for(var j=0;j<array_size-i-1;j++)
//         {
//             div_update(divs[j],div_sizes[j],"yellow");//Color update

//             if(div_sizes[j]>div_sizes[j+1])
//             {
//                 div_update(divs[j],div_sizes[j], "red");//Color update
//                 div_update(divs[j+1],div_sizes[j+1], "red");//Color update
//                 // [div_sizes[j],div_sizes[j+1]] =  [div_sizes[j+1],div_sizes[j]]
//                 var temp=div_sizes[j];
//                 div_sizes[j]=div_sizes[j+1];
//                 div_sizes[j+1]=temp;

//                 div_update(divs[j],div_sizes[j], "red");//Height update
//                 div_update(divs[j+1],div_sizes[j+1], "red");//Height update
//             }
//             div_update(divs[j],div_sizes[j], "blue");//Color updat
//         }
//         div_update(divs[j],div_sizes[j], "green");//Color update
//     }
//     div_update(divs[0],div_sizes[0], "green");//Color update

// }
// bubble.addEventListener("click",bubbleSort)