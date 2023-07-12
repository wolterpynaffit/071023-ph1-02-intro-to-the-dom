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
