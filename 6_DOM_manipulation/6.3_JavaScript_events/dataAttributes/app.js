const ul = document.querySelector('#cars')
ul.addEventListener('click', function(event) {
    console.log(event.target.getAttribute('data-id'))
    console.log(event.target.dataset)
    console.log(event.target.dataset.year)
    event.target.dataset.sold = 'true'
})