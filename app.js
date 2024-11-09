const stars = document.querySelectorAll('div .stars i')

const starOne = document.querySelector('.star-one')
const starTwo = document.querySelector('.star-two')
const starThree = document.querySelector('.star-three')
const starFour = document.querySelector('.star-four')
const starFive = document.querySelector('.star-five')

const starText = document.querySelector('.star-text')
const starTexts = [
  {
    text: "Excellent! We're thrilled to hear you had such a positive experience. thank you for choosing our platform"
  },
  {
    text: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support."
  },
  {
    text: "Thank you for your feedback.We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve"
  },
  {
    text: "We apologize for the inconvenience your experienced. We appreciate your feedback and would like to work with you to address any issues."
  },
  {
    text: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right."
  }
]

// hover on star effect

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener('mouseover', () => {
    stars[i].style.color = '#FACC15'
  })
}

// change text depending star rating

starOne.addEventListener('click', () => {
  starText.innerText = starTexts[4].text
})

starTwo.addEventListener('click', () => {
  starText.innerText = starTexts[3].text
})

starThree.addEventListener('click', () => {
  starText.innerText = starTexts[2].text
})

starFour.addEventListener('click', () => {
  starText.innerText = starTexts[1].text
})

starFive.addEventListener('click', () => {
  starText.innerText = starTexts[0].text
})