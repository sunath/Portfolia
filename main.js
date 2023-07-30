

function getMainViewPropertiesToWrite(){
    const windowWidthProperty = {
        'name':'--full-view-width',
        'value':window.innerWidth+"px"
    }
    
    const windowWHeightProperty = {
        'name':'--full-view-width',
        'value':window.innerWidth+"px"
    }

    return [windowWidthProperty,windowWHeightProperty]
}

function writeCustomProperties(properties){
    for(const property of properties){
        document.documentElement.style.setProperty(property.name,property.value)
    }
    
}

window.addEventListener('resize',(e) => {
    writeCustomProperties(getMainViewPropertiesToWrite())
})  




// Set default one
writeCustomProperties(getMainViewPropertiesToWrite())





for(const project of document.querySelectorAll(".project")){
    project.addEventListener('mousemove',e => {
        project.querySelector('.hover-effect').className = "hover-effect active-hover-effect"
        project.querySelector('.project-content').className = "project-content project-content-show"
    })

    project.addEventListener('mouseout',e => {
        project.querySelector('.hover-effect').className = "hover-effect deactive-hover-effect"
        project.querySelector('.project-content').className = "project-content"
    })
}




window.addEventListener('scroll',(e) => {
    e.preventDefault()
    // console.log(window.screenY,window.screenTop)
    // console.log()

    console.log(document.scrollingElement.getBoundingClientRect().y)
    if(document.scrollingElement.getBoundingClientRect().y != 0 ){
        document.querySelector(".header").className = "header header-show"
        
    }else{
        document.querySelector(".header").className = "header"
    }
})

// window.addEventListener('scroll',(e) => {
//     console.log(window.screenY,window.scrollY)
//     console.log(window.scrollbars)
// })\

document.querySelector(".mobile-nav-action").addEventListener('click',(e) =>{
    const links = document.querySelector(".links")

    if(e.target.textContent == "expand_more"){
        e.target.textContent = "expand_less"
        links.setAttribute('show','true')
    }else{
        e.target.textContent = "expand_more"
        links.setAttribute('show','false')
    }

})