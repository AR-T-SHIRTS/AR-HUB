document.getElementById('marker-button').addEventListener('click', toggleMarCarousel)
document.getElementById('model-button').addEventListener('click', toggleModCarousel)


function toggleMarCarousel () {
    document.getElementById('marker-button').classList.add("btn-outline-info")
    document.getElementById('model-button').classList.remove("btn-outline-secondary")
    document.getElementById('markers-carousel').classList.remove("d-none")
    document.getElementById('models-carousel').classList.add("d-none")
}

function toggleModCarousel () {

    document.getElementById('marker-button').classList.remove("btn-outline-info")
    document.getElementById('model-button').classList.add("btn-outline-secondary")
    document.getElementById('models-carousel').classList.remove("d-none")
    document.getElementById('markers-carousel').classList.add("d-none")
}