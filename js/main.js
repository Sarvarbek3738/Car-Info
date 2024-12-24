const form = document.querySelector("#car-form")
const name = document.querySelector(".car-Name")
const speed = document.querySelector(".car-Speed")
const prise = document.querySelector(".car-Price")
const image = document.querySelector(".car-image")
const button = document.querySelector("#button")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#name").innerHTML = name.value;
    document.querySelector("#speed").innerHTML = speed.value;
    document.querySelector("#price").innerHTML = prise.value;
    document.querySelector("#Image").src = image.value ;
    document.querySelector(".natija").style.display = "block" ;
})

