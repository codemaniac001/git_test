const select=document.querySelector("select");
const html=document.querySelector("html");
select.addEventListener("change", themees);
function update(bgColor, textcolor)
{
    html.style.backgroundColor=bgColor;
    html.style.color=textcolor;
}
function themees()
{
    const choice=select.value;
    if(choice==="red")
    {
        update("red","black");
    }
    else if(choice==="black")
    {
        update("black","white");
    }
    else if(choice==="surprise")
    {
        update("blue","yellow");
    }
    else{
        update("white","black");
    }
}
