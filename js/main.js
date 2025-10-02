// AOS.init()

// let myAnimation = document.querySelectorAll(".from-right")
// const animationObserver = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slide-in-right")
//         }
//         else{
//            entry.target.classList.remove("animate-slide-in-right")
//         }
//     });
// },{threshold:0.2})
// myAnimation.forEach(el=>{animationObserver.observe(el)})

if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark")
}
else{
        document.body.classList.remove("dark")

}
function createObserver(selector,animationStyle){
let myAnimation = document.querySelectorAll(selector)
const animationObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add(animationStyle)
        }
        else{
        //    entry.target.classList.remove(animationStyle)
        }
    });
},{threshold:0.2})
myAnimation.forEach(el=>{animationObserver.observe(el)})
}

createObserver(".from-right","animate-slide-in-right")
createObserver(".from-left","animate-slide-in-left")


let mode = document.querySelectorAll(".mode")


mode.forEach((btn)=>{



    btn.addEventListener("click",function(e){
        console.log(e.target);
        
        document.body.classList.toggle("dark")
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme","dark")
        }
        else{
            localStorage.setItem("theme","light")
        }
        
        if (e.target.classList.contains("fa-moon")) {
            console.log(e.target);
            
            e.target.classList.remove("fa-moon")
            e.target.classList.add("fa-sun")   
        }
        else {
            e.target.classList.remove("fa-sun")
            e.target.classList.add("fa-moon")  
            console.log(e.target);
            
        }
    })
    
})
    
let mobileMenu = document.querySelector(".mobile-menu")
let menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click",function(){
    if (mobileMenu.classList.contains("-translate-x-full")) {
        
        mobileMenu.classList.remove("-translate-x-full")
    }
else{
            mobileMenu.classList.add("-translate-x-full")

}
})