// Your code goes here
const event1 = document.querySelector(".nav a")
event1.addEventListener("click", () => {
    if (event1.style.color ="red") {
        event1.style.color = "limegreen"
    } else if (event1.style.color = "limegreen"){
        event1.style.color = "red";
    }
})


const event2 = document.querySelector(".intro img")
event2.addEventListener("mouseenter", () => {
    event2.style.transform = "scale(1.2)";
    event2.style.transition = "all 0.3s"
})

const event3 = document.querySelector(".intro img")
event3.addEventListener("mouseleave", () => {
    event3.style.transform = "scale(1)";
    event3.style.transition = "all 0.3s"
})

const event4 = document.querySelector(".intro h2")
event4.addEventListener("dblclick", () => {
    event4.style.color = "orange";
})

const event5 = document.querySelector(".intro p")
event5.addEventListener("wheel", () => {
    event5.textContent = "Changed!!!!";
})

const event6 = document.querySelector(".text-content h2")
event6.addEventListener("mousedown", () => {
    event6.textContent = "mousedown";
})

const event7 = document.querySelector(".text-content p")
event7.addEventListener("drag", () => {
event7.textContent = "tried to drag this"
})

const event8 = document.querySelector(".content-section .img-content img")
event8.addEventListener("dragstart", () => {
event8.style.transform = "scale(2)";
})

const event9 = document.querySelector(".content-destination h2")
event9.addEventListener("dragend", () => {
event9.textContent = "Ended a drag"
})

const event10 = document.querySelector(".content-destination p")
event10.addEventListener("dragover", () => {
event10.textContent = "Dragged something over this"
})

const gsapAnimation = document.querySelector(".content-destination img")
TweenMax.to(".content-destination img", 1, {
    rotation: 180,
    yoyo: true,
    repeat: -1,
    ease: Elastic.easeOut.config( 1, 0.1)
  })