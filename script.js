const shareBtn = document.querySelector('.btn')
const shareOptions = document.querySelector('.share__options')

shareBtn.addEventListener('click',()=>{
    shareOptions.classList.toggle('active')
})
