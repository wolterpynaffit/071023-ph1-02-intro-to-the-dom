const posters = document.createElement('div')
// const newDiv = posters.className = ".movie-posters"
posters.id = "movie-posters"
document.body.append(posters)

/*------------------------ Movie 1: JURASSIC PARK -----------------------------*/ 
const containerOne = document.createElement('div')
posters.append(containerOne)


const imageOne = document.createElement('img')
imageOne.src  = "https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_UF894,1000_QL80_.jpg"
containerOne.append(imageOne)
const titleOne = document.createElement('h2')
titleOne.textContent = "Jurassic Park"
containerOne.append(titleOne)
const descriptionOne = document.createElement('p')
descriptionOne.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse explicabo aut quidem? Veritatis, illo temporibus? Nesciunt animi, est repudiandae laboriosam quod expedita veniam nulla. Corrupti fuga quis architecto expedita est, voluptatum quasi sequi molestiae earum obcaecati veniam alias tempora culpa similique consectetur autem sapiente veritatis deleniti nulla nostrum sunt! Optio saepe itaque aliquam ab esse ut, porro veniam accusantium laboriosam autem dolorem laborum placeat? Inventore dolorem odit nemo, quidem reiciendis illum iure, illo porro eveniet velit, tenetur minus quae architecto consequuntur recusandae ipsa aut fugiat tempora minima maxime corrupti non. Obcaecati dolorem ipsam optio deleniti ipsum pariatur officiis inventore!"
containerOne.append(descriptionOne)


console.log()

/*---------------------------- Movie 2: HOOK  -----------------------------*/ 
const containerTwo = document.createElement('div')
posters.append(containerTwo)

const imageTwo = document.createElement('img')
imageTwo.src = " https://flxt.tmsimg.com/assets/p13606_p_v10_am.jpg"
imageTwo.style.width = "45rem"
containerTwo.append(imageTwo)
const titleTwo = document.createElement('h2')
titleTwo.textContent = "Hook"
containerTwo.append(titleTwo)
const descriptionTwo = document.createElement('p')
descriptionTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse explicabo aut quidem? Veritatis, illo temporibus? Nesciunt animi, est repudiandae laboriosam quod expedita veniam nulla. Corrupti fuga quis architecto expedita est, voluptatum quasi sequi molestiae earum obcaecati veniam alias tempora culpa similique consectetur autem sapiente veritatis deleniti nulla nostrum sunt! Optio saepe itaque aliquam ab esse ut, porro veniam accusantium laboriosam autem dolorem laborum placeat? Inventore dolorem odit nemo, quidem reiciendis illum iure, illo porro eveniet velit, tenetur minus quae architecto consequuntur recusandae ipsa aut fugiat tempora minima maxime corrupti non. Obcaecati dolorem ipsam optio deleniti ipsum pariatur officiis inventore!"
containerTwo.append(descriptionTwo)

/*------------------------  Movies: THE GOONIES -----------------------------*/ 
const containerThree = document.createElement('div')
posters.append(containerThree)

const imageThree = document.createElement('img')
imageThree.src = "https://m.media-amazon.com/images/I/6198vp6P7nL._AC_UF894,1000_QL80_.jpg"
containerThree.append(imageThree)
const titleThree = document.createElement('h3')
titleThree.textContent = "The Goonies"
containerThree.append(titleThree)
const descriptionThree = document.createElement('p')
descriptionThree.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse explicabo aut quidem? Veritatis, illo temporibus? Nesciunt animi, est repudiandae laboriosam quod expedita veniam nulla. Corrupti fuga quis architecto expedita est, voluptatum quasi sequi molestiae earum obcaecati veniam alias tempora culpa similique consectetur autem sapiente veritatis deleniti nulla nostrum sunt! Optio saepe itaque aliquam ab esse ut, porro veniam accusantium laboriosam autem dolorem laborum placeat? Inventore dolorem odit nemo, quidem reiciendis illum iure, illo porro eveniet velit, tenetur minus quae architecto consequuntur recusandae ipsa aut fugiat tempora minima maxime corrupti non. Obcaecati dolorem ipsam optio deleniti ipsum pariatur officiis inventore!'
containerThree.append(descriptionThree)




function newPoster(url, title, description){

     /*-----------Container--------------*/ 
   const container = document.createElement('div')
   document.body.append(container)


    /*-------------Image---------------*/ 
    const picTag = document.createElement('img')
    container.append(picTag)
    picTag.src = url
    picTag.style.width ="45rem"


    /*-------------Title---------------*/ 
    const titleTag = document.createElement('h2')
    titleTag.textContent = title
    container.append(titleTag)
     /*-------------Description------------*/ 
    const desTag = document.createElement('p')
    desTag.textContent = description
    container.append(desTag)
}

newPoster('https://m.media-amazon.com/images/M/MV5BMjM2MDE4OTQwOV5BMl5BanBnXkFtZTgwNjgxMTg2NzE@._V1_.jpg', "Labryinth", "this is the description nulla. Corrupti fuga quis architecto expedita est, voluptatum quasi sequi molestiae earum obcaecati veniam alias tempora culpa similique consectetur autem sapiente veritatis deleniti nulla nostrum sunt! Optio saepe itaque aliquam ab esse ut, porro veniam accusantium laboriosam autem dolorem laborum placeat? Inventore dolorem odit nemo, quidem reiciendis illum iure, illo porro eveniet velit, "
)

    