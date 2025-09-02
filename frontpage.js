const button= document.getElementById("add")
const form = document.getElementById("taskform")
const tasklist=document.getElementById("tasklist")

form.style.display="none"
    
button.addEventListener("click", function(){
     if (form.style.display==="none" || form.style.display==="") {
        form.style.display="block"
        button.innerHTML = '<i class="fa fa-close"  style="color:red;"></i>'
     } 
     else {
        form.style.display="none"
        button.innerHTML = '<i class="fa fa-plus" style="color:white;"></i>'
        
     }

})

form.addEventListener("submit", function(e){

    e.preventDefault();

    const task= document.getElementById("task").value;
    
    console.log("new task::", task);
    
    const li=document.createElement("li")
    tasklist.appendChild(li)
    form.reset();

    const editbtn=document.createElement("button")
    editbtn.textContent="Edit"

    const span=document.createElement("span")
    span.textContent=task
    li.appendChild(span)

    editbtn.addEventListener("click", function(){


       if (form.style.display==="block") {
        form.style.display="none"
        button.innerHTML = '<i class="fa fa-plus" style="color:white;"></i>'
       }
        
        if (editbtn.textContent==="Edit") {
            const input=document.createElement("input")
            input.type="text"
            input.value=span.textContent
 
            li.replaceChild(input,span)
         
            editbtn.textContent="save"
        }

        else {
             const input=li.querySelector("input")
             span.textContent=input.value
 
             li.replaceChild(span,input)
 
             editbtn.textContent="Edit"
             
        }

    
    
})

    // del button

    const delbtn=document.createElement("button")
    delbtn.textContent="delete"

    delbtn.addEventListener("click", function(){

        li.remove()

    })

    li.appendChild(editbtn)  
    li.appendChild(delbtn)
    

})
