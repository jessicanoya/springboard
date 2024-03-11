document.addEventListener('mousemove', function(e) {
    // console.log(e.pageX, e.pageY)
    const r = Math.round(e.pageX * 225 / window.innerWidth)
    const b = Math.round(e.pageY * 225 / window.innerHeight)
    const color = `rgb(${r}, 0, ${b})`
    document.body.style.backgroundColor = color
    console.log(color)
})
