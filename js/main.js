const form = document.querySelector("#car-form")
const name = document.querySelector(".car-Name")
const speed = document.querySelector(".car-Speed")
const prise = document.querySelector(".car-Price")
const image = document.querySelector(".car-image")
const button = document.querySelector("#button")
const allCards = document.querySelector(".allCards")

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(name.value == "" || speed.value == "" || image.value == "" || prise.value == "") {
        alert("Malumot toliq kritilmagan")
    } else {
        allCards.innerHTML +=  `
        <div class="natija">
            <div class="result-container">
                <!-- <h1 class="placeholderMessage" >Ma'lumot kiriting</h1> -->
                <div id="car-details" class="hidden">
                    <div class="img"><img id="Image" src="${image.value}" alt="Car image"></div>
                    <div class="title">
                        <h3 id="name">${name.value}</h3>
                        <p><strong>Speed:</strong> <span id="speed">${speed.value}</span> km/h</p>
                        <p><strong>Price:</strong> $<span id="price">${prise.value}</span></p>
                    </div>
                </div>
            </div>
            
        </div>
    `
    }
    
    
})