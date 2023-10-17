//input tag
var inputText = document.getElementById("input")

//button tag
var subBtn = document.getElementById("button")

//todo list
var todoListTag = document.getElementById("todolist")

//& array to store all todo elements, initially empty
var todoArr=[]

//When add button is clicked
subBtn.addEventListener("click", addItemToArray)

//if input is on Focus and enter is clicked addItemToArray should be calld to add element to array
inputText.addEventListener("keypress",(event)=>{
    // console.log(event.key);
    if(event.key=="Enter"){
        addItemToArray()
    }
})

function addItemToArray(event){

    //! EXTRA-> event.target.value==inputText.value;

    //*push the value to array if its not an empty string
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }

    //reset the value to empty string
    inputText.value=""
    
    display()
}

function display() {
    //clear out previous old ones everything 
    todoListTag.innerHTML = "";

    //map through array and display
    todoArr.map((curr,i)=>{
        //structure of li tag
        var listItem = `
        <li id="item${i}">
          <div>${curr}</div>
          <div>
            <span onclick="deleteItem(${i})">&times;</span>
            <span>|</span>
            <span onclick="editItem(${i})">Edit</span>
          </div>
        </li>
      `;

      //insert it inside <ul id="todolist">
      todoListTag.innerHTML += listItem;
    });
}

function deleteItem(index){
    console.log("index: ", index);
    //delete theelement[index] from todoArr
    todoArr.splice(index,1);
    display();
}

function editItem(index) {
    var newValue = prompt("Pls Edit");
    //Insert the value to array at that index
    todoArr.splice(index, 1, newValue);
    display();
}

//reset the todolist
document.getElementById('reset').addEventListener('click',()=>{
    todoArr=[]
    display()
})