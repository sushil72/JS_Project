let colorBox=document.querySelectorAll(".colors");
// console.log(colorBox);
let body =document.querySelector('body');
colorBox.forEach(function(btn){
    console.log(btn);
    btn.addEventListener("click",function(e){
        // console.log(e);
    if(e.target.id==='green')
       body.style.backgroundColor=e.target.id;
    if(e.target.id==='blue')
       body.style.backgroundColor=e.target.id;
    if(e.target.id==='red')
       body.style.backgroundColor=e.target.id;
    if(e.target.id==='yellow')
       body.style.backgroundColor=e.target.id;

    })
})