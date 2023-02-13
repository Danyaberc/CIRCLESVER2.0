
let circles = document.querySelectorAll('.circles')

let btncircles = document.querySelector('.btn')

btncircles.addEventListener('click', () => {
   addLightRed()
})


let addLightRed = () => {
   circles[0].classList.add('red')
   circles[2].classList.remove('green')
   setTimeout(() => {
      addLightYellow()
   }, 1500)
}

let addLightYellow = () => {
   circles[0].classList.remove('red')
   circles[1].classList.add('yellow')
   setTimeout(() => {
      addLightGreen()
   }, 1500)
}

let addLightGreen = () => {
   circles[1].classList.remove('yellow')
   circles[2].classList.add('green')
   setTimeout(() => {
      addLightRed()
   }, 1500)
}







