const newTodo = document.createElement('li')
const boldText = document.createElement('b')
const ul = document.querySelector('ul')
boldText.textContent = "DONT FORGET TO LOCK THE COOP"
newTodo.classList = 'todo'
newTodo.append(boldText)
ul.append(newTodo)


const secondTodo = document.createElement('li')
secondTodo.textContent = "Order more la croix"
secondTodo.className = 'todo'

ul.append(newTodo, secondTodo)

const thirdTodo = document.createElement('li')
thirdTodo.textContent = "Feed Cats"
thirdTodo.classList = 'todo'
ul.prepend(thirdTodo)

const newImg = document.createElement('img')
newImg.classList.add('thumbnail')
newImg.setAttribute('src', 'https://media.istockphoto.com/id/1285308242/photo/to-do-list-text-on-notepad.jpg?s=1024x1024&w=is&k=20&c=60ZwQV-xfL7GI26lkTttdkEQ8slO47zZJs3lbEvgPdI=')
document.body.prepend(newImg)

const removeMe = document.querySelector('#remove-me')
removeMe.remove()

const h1 = document.querySelector('h1')
h1.remove()


// const removeMe = document.querySelector('#remove-me')
// ul.removeChild(removeMe)