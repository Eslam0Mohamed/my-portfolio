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


