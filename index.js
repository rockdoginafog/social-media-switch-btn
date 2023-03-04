const switchBtn = document.querySelector(".checkbox")
const lightTheme = document.querySelectorAll(".light-theme")
const userContainer = document.querySelectorAll(".user-container")
const overwiewContainer = document.querySelectorAll(".overwiew-container")
const body = document.querySelector(".body")


function darkThemeSwtich(){
    lightTheme.forEach(thing =>{
        thing.classList.add("color-dark")
    })

    userContainer.forEach(thing =>{
        thing.classList.add("bg-dark")
    })

    overwiewContainer.forEach(thing =>{
        thing.classList.add("bg-dark")
    })

    body.classList.add("body-dark")
}


function lightThemeSwitch(){
    lightTheme.forEach(thing =>{
        thing.classList.remove("color-dark")
    })

    userContainer.forEach(thing =>{
        thing.classList.remove("bg-dark")
    })

    overwiewContainer.forEach(thing =>{
        thing.classList.remove("bg-dark")
    })

    body.classList.remove("body-dark")
}


switchBtn.addEventListener("click", () =>{
    if(switchBtn.checked){
        darkThemeSwtich()
    }else{
        lightThemeSwitch()
    }
})