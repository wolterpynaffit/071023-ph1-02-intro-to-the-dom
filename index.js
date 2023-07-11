// const mainTitle = document.getElementById("main-title")
const mainTitle = document.querySelector("#main-title")
// console.log(mainTitle)

// const pTags = document.getElementsByTagName('p')
// console.log(pTags)

const pTags = document.querySelectorAll("p")
// console.log(pTags) <-- this will get the entire list of <p> tags
// console.log(pTags[0]) <-- this will get only the first element in the list

const description = document.querySelector(".description")
// query selector is preferred since it's more flexible and predictable
// console.log(description)

const jacob = document.createElement("img")
jacob.src = "https://static.wikia.nocookie.net/twilightsaga/images/7/7f/Jacob-555644_429620497081182_285483444_n.jpg/revision/latest?cb=20120728050833"
jacob.style.width = "200px"
description.append(jacob)
// description.prepend(newImage)
// for yourself, test out the difference between append and prepend

// const newImageTwo = document.createElement("img")
// newImageTwo.src = "https://static.wikia.nocookie.net/twilightsaga/images/7/7f/Jacob-555644_429620497081182_285483444_n.jpg/revision/latest?cb=20120728050833"
// newImageTwo.style.width = "500px"
// description.append(newImageTwo)
// description.prepend(newImage)

const edward = document.createElement("img")
edward.src = "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Edward_Cullen.jpg/250px-Edward_Cullen.jpg"
document.body.append(edward)

edward.remove()
