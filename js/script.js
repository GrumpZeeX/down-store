document.getElementById('reg').addEventListener("click", function () {
   document.getElementById('modalReg').classList.add('opened')
   document.getElementById('modalRegWrapper').classList.add('opened__wrapper')
})
document.getElementById('modalRegWrapper').addEventListener("click", function () {
   document.getElementById('modalReg').classList.remove('opened')
   document.getElementById('modalRegWrapper').classList.remove('opened__wrapper')
})
document.getElementById('log').addEventListener("click", function () {
   document.getElementById('modalLog').classList.add('opened')
   document.getElementById('modalRegWrapper').classList.add('opened__wrapper')
})
document.getElementById('modalRegWrapper').addEventListener("click", function () {
   document.getElementById('modalLog').classList.remove('opened')
   document.getElementById('modalRegWrapper').classList.remove('opened__wrapper')
})