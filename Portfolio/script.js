const span = document.querySelectorAll('h1 span')
span.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', rubberBand)
}))
span.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', rubberBand)
}))