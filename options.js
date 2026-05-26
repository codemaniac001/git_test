const select=document.querySelector("select");
const para=document.querySelector("p");
select.addEventListener("change",setWeather);
function setWeather(){
    const choice=select.value;
    if(choice==="sunny")
    {
        para.textContent=
        "It is so hot outside, you can't even stand there and the scorching rays of sun are so done";
    }
    else if(choice==="outcast")
    {
        para.textContent=
        "You have been outcast, no entry for you from now on ! go away";
    }
    else if(choice==="raining")
    {
        para.textContent=
        "It is a rainy season. Full on .... rain rain rain ......";
    }
    else if(choice==="snowy")
    {
        para.textContent=
        "After so many days , some employment is going to come to our life ....Hurrah";
    }
    else{
        para.textContent="";
    }
}