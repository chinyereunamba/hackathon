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

function animateIcon() {
    var animatedIcon = document.getElementById('animated-icon');

    // Add the rotating class to start the rotation
    animatedIcon.classList.add('rotating');

    // Step 1
    animatedIcon.innerHTML = '<path d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />';
    
    // After a delay, move to Step 2
    setTimeout(function () {
      animatedIcon.innerHTML ='<circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />'; 
      
      // After another delay, move to Step 3
      setTimeout(function () {
        animatedIcon.innerHTML = `
<circle id="Ellipse 1" cx="12" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M18.3575 8.21967C18.6564 8.51256 18.6564 8.98744 18.3575 9.28033L11.7248 15.7803C11.426 16.0732 10.9414 16.0732 10.6425 15.7803L7.3262 12.5303C7.02733 12.2374 7.02733 11.7626 7.3262 11.4697C7.62507 11.1768 8.10963 11.1768 8.4085 11.4697L11.1837 14.1893L17.2752 8.21967C17.574 7.92678 18.0586 7.92678 18.3575 8.21967Z" fill="white"/>
</g>`

        // Remove the rotating class after all three steps are completed
        animatedIcon.classList.remove('rotating');
      }, 200);
    }, 200);
  }
