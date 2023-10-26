
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let startid;
let startchanging=function(){
  if(!startid){
    startid=setInterval(function(){
    document.body.style.backgroundColor =randomColor();
  },1000);
}
}

const stopchanging=function(){
  clearInterval(startid);
  startid=null;
}

   document.getElementById("start").addEventListener('click',startchanging);
  document.getElementById("stop").addEventListener('click',stopchanging);
