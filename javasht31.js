let menu=document.querySelector('#menu');
menu.addEventListener('click',(event)=>{
        let target =event.target;
        switch(target.id){
            case 'home':
                alert("home has been clicked");
                break;
            case 'dashboard':
                alert("dashboard has been clicked");
                break;
            case 'report':
                alert("report has been clicked");
                break;
            
        }
});