const body = document.querySelector('body')
const container = document.querySelector('.container')
const buttonClick = document.querySelector('.button-click')
const heading = document.querySelector('.gradient-heading')
const condeOne = document.querySelector('.code-one')
const condeTwo = document.querySelector('.code-two')
const gradientLines = document.querySelector('.gradint-lines__span')

const colorHex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f',]

buttonClick.addEventListener('click', function() {
    let gradientColor = '#'
    for(i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * colorHex.length)
        gradientColor += colorHex[random];
    }

    let gradientColor2 = '#'
    for(i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * colorHex.length)
        gradientColor2 += colorHex[random];
    }

    const randomDeg = Math.floor(Math.random()* 360)
    body.style.background = `linear-gradient(${randomDeg}deg, ${gradientColor}, ${gradientColor2})`

    condeOne.textContent = `${gradientColor}`
    condeTwo.textContent = `${gradientColor2}`
    gradientLines.textContent = `${randomDeg}`

})








