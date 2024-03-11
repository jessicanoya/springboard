const colorsSection = document.querySelector('#colors')

colorsSection.addEventListener('click', function(event){
    document.body.style.backgroundColor = event.target.dataset.hex
})