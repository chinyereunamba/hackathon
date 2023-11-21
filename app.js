const setupIcon = document.querySelector(".icon")
const openCloseIcon = document.querySelectorAll(".icon span")
const setupGuideContent = document.querySelector('.content')
const trialClose = document.querySelector('.trial-msg .close-icon')
const trialMsg = document.querySelector('.trial-msg')
const textContent = document.querySelectorAll('.content .text-content')

trialClose.addEventListener('click', () => {
    trialMsg.classList.add('close')
})

setupIcon.addEventListener("click", () => {
    openCloseIcon.forEach((btn) => {
        btn.classList.toggle("active")
    })
    setupGuideContent.classList.toggle('active')
})
