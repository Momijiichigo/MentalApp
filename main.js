let promColumnButton = document.querySelector("#promcolumn");
let toDoButton = document.querySelector("#toDo");
let homeBtn = document.querySelector("#homeBtn");
let slider = document.querySelector("#slider");
let pages = document.querySelector(".page");
promColumnButton.addEventListener("click",()=>{
    anime({
        targets: slider,
        translateX: "0%",
        duration: 100,
        delay:0,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: pages,
        translateX: "0%",
        duration: 100,
        delay:0,
        easing: 'easeInOutQuad'
      });
})
homeBtn.addEventListener("click",()=>{
    anime({
        targets: slider,
        translateX: "100%",
        duration: 100,
        delay:0,
        easing: 'easeInOutQuad'
      });
      anime({
        targets: pages,
        translateX: "-100%",
        duration: 100,
        delay:0,
        easing: 'easeInOutQuad'
      });
})
toDoButton.addEventListener("click",()=>{
    console.log("aaaa")
    anime({
        targets: slider,
        translateX: "200%",
        duration: 100,
        delay:0,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: pages,
        translateX: "-200%",
        duration: 100,
        delay:0,
        easing: 'easeInOutQuad'
      });
})

