// constants from HTML for the day and night and menu buttons
const dayNight = document.querySelector('.dayNight')
const menuToggle = document.querySelector('.menuToggle')
const body = document.querySelector('body')
// constant for the mobile menu
const navigation = document.querySelector('.navigation')

// Toggling the Night and light mode
dayNight.addEventListener('click', () => {
  body.classList.toggle('dark')
  dayNight.classList.toggle('active')
})

// Toggling the Menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

