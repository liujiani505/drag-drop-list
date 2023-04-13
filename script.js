const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("dragstart" , ()=> {
        // Adding dragging class to item after a delay
        setTimeout(() => item.classList.add("dragging"), 0);
    })
    item.addEventListener("dragend" , ()=> {
        item.classList.remove("dragging");
    })
})

