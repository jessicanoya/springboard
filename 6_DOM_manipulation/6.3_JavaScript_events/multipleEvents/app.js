// const removeButtons = document.querySelectorAll('li button')
// const form = document.querySelector('#add-friend')
// const input = document.querySelector('#first-name')
// const friendList = document.querySelector('#friend-list')

// for (let btn of removeButtons){
//     btn.addEventListener('click', function(event){
//         event.target.parentElement.remove()
//     })
// }

// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     console.log(input.value)
//     const newFriend = document.createElement('li')
//     const removeBtn = document.createElement('button')
//     removeBtn.innerText = 'Unfriend'
//     removeBtn.addEventListener('click', function(event) {
//         event.target.parentElement.remove()
//     })
//     newFriend.innerText = input.value
//     newFriend.appendChild(removeBtn)
//     input.value = ''
//     friendList.appendChild(newFriend)
// })

const form = document.querySelector('#add-friend')
const input = document.querySelector('#first-name')
const friendList = document.querySelector('#friend-list')

friendList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove()
    }
    if (event.target.tagName === 'LI') {
        event.target.classList.add('best-friend')
        const heart = document.createElement('span')
        heart.innerHTML = '&hearts;'
        event.target.prepend(heart)
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(input.value)
    const newFriend = document.createElement('li')
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'Unfriend'
    newFriend.innerText = input.value
    newFriend.appendChild(removeBtn)
    input.value = ''
    friendList.appendChild(newFriend)
})