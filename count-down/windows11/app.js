let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click",()=>{
    if(startmenu.style.bottom == "85px"){
        startmenu.style.bottom = "-434px"
    }
    else{
        startmenu.style.bottom = "85px"
    }
})