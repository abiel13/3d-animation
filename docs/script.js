// get elements
var card = document.querySelector('.card');
var container = document.querySelector('.container')
var titles = document.querySelector('.title')
console.log(titles)

container.addEventListener('mousemove',(e) =>{
  let xAxis = (window.innerWidth /5 - e.pageX) /10;
  let yAxis = (window.innerHeight /5 - e.pageY) /10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
 
})

container.addEventListener('mouseenter',(e) => {
card.style.transition ='none'
titles.style.transform = `translateZ(150px) ` ;
})

container.addEventListener('mouseleave',(e) => {
    card.style.transition ='all 0.4s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})
