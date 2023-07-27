

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




document.addEventListener('scroll',(e) => {
    if(window.scrollY != 0 ){
        document.querySelector(".header").className = "header header-show"
    }else{
        document.querySelector(".header").className = "header"
    }
})