const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

// Adding todo by keys
inputBox.addEventListener("keyup", function (event) {
    if(event.key === "Enter"){
        addTodo(this.value)
        this.value =''
    }
});
const addTodo = (inputValue) => {
    let listItem = document.createElement("li")
    listItem.innerHTML = inputValue
    if(listItem.innerText == ''){
        alert("Please write something !")
    } else {
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    listItem.appendChild(span)
    listContainer.appendChild(listItem)
    
    listItem.addEventListener("click", function (){
        this.classList.toggle("checked")
    })
    listItem.querySelector("span").addEventListener("click", function(){
        this.parentElement.remove()
    })
}
}

// Adding todo by Button
addBtn.addEventListener("click",function addTodo() {
    if(inputBox.value === ''){
        alert("Please write something !")
    } else {
        let item = document.createElement("li")
        item.innerText = inputBox.value
        listContainer.appendChild(item)
        let clearBtn = document.createElement("span")
        clearBtn.innerHTML = "\u00d7"
        item.appendChild(clearBtn)

        item.addEventListener("click", function (){
            this.classList.toggle("checked")
        })
        item.querySelector("span").addEventListener("click", function(){
            this.parentElement.remove()
        })
    }
    inputBox.value = '';
})
