const selectionBtn = document.getElementById("selection");
// const  bubble = document.getElementById("bubble")

const selectionSort = async () => {
  // bubble.target.disabled = true;
  const ele = document.querySelectorAll(".divs");
  for (let i = 0; i < ele.length; i++) {
    newArray.disabled = false
    bubble2.disabled = true;
    selection.disabled = true;
    insertion.disabled = true;
    for (let j = i + 1; j < ele.length; j++) {
      ele[i].style.background = "yellow";
      ele[j].style.background = "white";
      if (parseInt(ele[i].style.height) < parseInt(ele[j].style.height)) {
        try {
          await waitforme(100);
          swap(ele[j], ele[i]);
        } catch (error) {
          console.log(error);
        }
      }
      ele[i].style.background = "green";
      ele[j].style.background = "green";
    }
    ele[i].style.background = "pink";
  }
};
selectionBtn.addEventListener("click", selectionSort);
