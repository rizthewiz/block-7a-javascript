const buttonBc = document.querySelector(".btn-bc");
const buttonT = document.querySelector("#btn-t");
const buttonCircle = document.querySelector("#btn-circles");
const body = document.querySelector("body");
const mainTitle = document.querySelector("#main-title");
// const body = document.body



console.log({buttonBc,buttonCircle,buttonT})
buttonBc.addEventListener('click',()=>{
    body.style.backgroundColor = "red";
})

buttonT.addEventListener('click',()=>{
    mainTitle.textContent = "I am hungry! 🦞";
})

buttonCircle.addEventListener('click', ()=>{
    const circle = document.createElement('div');
    circle.style.width = "200px";
    circle.style.height = "200px";
    circle.style.borderRadius = "100%";
    circle.style.border = "1px dashed blue";
    body.append(circle);
})


