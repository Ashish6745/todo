const item = document.querySelector("#item")
const todoBox = document.querySelector("#to-do-box")
// event listener is added so if key press any key on the keyboard it will be added to the items
// if key pressed is an enter key then it will add the input field's value to the items 
item.addEventListener(
  "keyup",
  function (event) { 
   if(event.key == "Enter") { 
      
     add(this.value)
      this.value = ""
   }  
  }
)
// the add arrow function will create the list [LI] and will also add an icon  of to do works and other toggle function is used to remove the task which is done and done is an class which will turn to other color and then we can remove it 
const add = (item) => {
  const listItem = document.createElement("li")
  listItem.innerHTML =`${item}
          <i class="fas fa-times"></i>`;
  listItem.addEventListener(
    "click",
    function () {
      this.classList.toggle("done");
    }
  )
  listItem.querySelector("i").addEventListener(
    "click",
    function(){
      listItem.remove()
    }
  )
  // it will append/add the items to the todobox
  todoBox.appendChild(listItem)
}
