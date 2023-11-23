const parrafos = document.querySelectorAll('p')
const button = document.querySelector('button')
const input = document.querySelector('input')


button.addEventListener("click", e => {
  e.preventDefault()
  parrafos.forEach((parrfo) => {
    console.log(parrfo.textContent.includes('Contenido-1'))
  })
})


