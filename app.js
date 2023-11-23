const main = document.querySelector("main")
const nav = document.querySelector("nav")
const notifyIcon = document.querySelector(".notify-icon")
const profileIcon = document.querySelector(".profile-icon")
const notifyDialog = document.querySelector(".notify-dialog")
const profileDialog = document.querySelector(".profile-dialog")
const setupIcon = document.querySelector(".setup button.setup-icon")
const openCloseIcon = document.querySelectorAll(".icon span")
const setupGuideContent = document.querySelector(".content")
const setupIntro = document.querySelector(".setup-guide .intro")
const trialClose = document.querySelector(".trial-msg .close-icon")
const trialMsg = document.querySelector(".trial-msg")
const list = document.querySelectorAll(".content li")
const checkMark = document.querySelectorAll(".content button.icon")
const checkMarkVariants = document.querySelectorAll(".content button.icon svg")
const title = document.querySelectorAll(".content .title")
const textContent = document.querySelectorAll(".content .text-content")
const imageContent = document.querySelectorAll(".content .image-content")
const bar = document.querySelector(".bar")

notifyIcon.addEventListener("click", () => {
  notifyIcon.classList.toggle("active")
  notifyDialog.classList.toggle("active")
  profileIcon.classList.remove("active")
  profileDialog.classList.remove("active")
})

notifyDialog.addEventListener("click", () => {
  notifyIcon.classList.remove("active")
  notifyDialog.classList.remove("active")
})
profileIcon.addEventListener("click", () => {
  profileIcon.classList.toggle("active")
  profileDialog.classList.toggle("active")
  notifyIcon.classList.remove("active")
  notifyDialog.classList.remove("active")
})

profileDialog.addEventListener("click", () => {
  profileIcon.classList.remove("active")
  profileDialog.classList.remove("active")
})

main.addEventListener("click", () => {
  profileIcon.classList.remove("active")
  profileDialog.classList.remove("active")
  notifyIcon.classList.remove("active")
  notifyDialog.classList.remove("active")
})

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
  openCloseIcon[0].classList.add("active")
  openCloseIcon[1].classList.remove("active")
})

let barValue = 0
const progressLabel = document.querySelector(".progress .label")
const styleElem = document.head.appendChild(document.createElement("style"))

list.forEach((el, index) => {
  title[index].addEventListener("click", () => {
    list.forEach((item) => {
      item.classList.remove("active")
    })
    el.classList.toggle("active")
  })
  title[index].addEventListener("keydown", () => {
    list.forEach((item) => {
      item.classList.remove("active")
    })
    el.classList.toggle("active")
  })
  checkMark[index].addEventListener("click", () => {
    checkMark[index].children.item(1).classList.toggle("active")
    checkMark[index].children.item(0).classList.toggle("active")
    if (checkMark[index].children.item(1).classList.contains("active")) {
      list.forEach((item) => {
        item.classList.remove("active")
      })
      list[index < 4 ? index + 1 : index].classList.add("active")
    }
    checkMark[index].children.item(0).classList.contains("active")
    ? barValue--
    : barValue++
    
    styleElem.innerHTML = `.progress .bar::after {width: ${14.4 * barValue}px;}`
    progressLabel.textContent = `${barValue} / 5 completed`
  })
})
