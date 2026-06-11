const buttons=document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListerner("click",()=>{
        alert(button.id);
    });
});