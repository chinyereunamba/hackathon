const setupIcon = document.querySelector(".setup button.icon")
const openCloseIcon = document.querySelectorAll(".icon span")
const setupGuideContent = document.querySelector(".content")
const setupIntro = document.querySelector('.setup-guide .intro')
const trialClose = document.querySelector(".trial-msg .close-icon")
const trialMsg = document.querySelector(".trial-msg")
const list = document.querySelectorAll(".content li")
const checkMark = document.querySelectorAll(".content span.icon")
const title = document.querySelectorAll(".content .title")
const textContent = document.querySelectorAll(".content .text-content")
const imageContent = document.querySelectorAll(".content .image-content")

trialClose.addEventListener("click", () => {
  trialMsg.classList.add("close")
})

setupIcon.addEventListener("click", () => {
  openCloseIcon.forEach((btn) => {
    btn.classList.toggle("active")
  })
  setupGuideContent.classList.toggle("active")
})
setupIntro.addEventListener("click", () => {
    setupGuideContent.classList.add("active")
    console.log('clicked')
})

list.forEach((el, index) => {
  title[index].addEventListener("click", () => {
    list.forEach((item) => {
      item.classList.remove("active")
    })
    el.classList.toggle("active")
  })
  checkMark[index].addEventListener("click", () => {
    console.log("clicked")
  })
})
