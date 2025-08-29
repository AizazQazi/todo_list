    
    const button= document.getElementById("add")
    const originaltext=button.innerText
    
    console.log(originaltext)
    
    
    button.addEventListener("click", function(){
        if (button.innerText===originaltext) {
        button.innerText="Hi...."
    }
    else{
        button.innerText="Add new task"
    }

})

