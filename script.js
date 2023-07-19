let descBtn = document.getElementById("desc-radio");
let detailsBtn = document.getElementById("details-radio");

descBtn.addEventListener("click", () => {
    document.getElementById("descDetails").style.display = "block";
    document.getElementById("detailsChairCont").style.display = "none";
});
detailsBtn.addEventListener("click", () => {
    document.getElementById("descDetails").style.display = "none";
    document.getElementById("detailsChairCont").style.display = "flex";
});

let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let color3 = document.getElementById("color-3");
let color4 = document.getElementById("color-4");
let color5 = document.getElementById("color-5");
let color6 = document.getElementById("color-6");

let charImage = document.getElementById("chair-image");
let wrapper = document.getElementById("wrapper");

color1.addEventListener("click", () => {
    charImage.src = "./images/chair1.png";
    charImage.classList.add("animate-class");
    setTimeout(() => {
        charImage.classList.remove("animate-class");
    }, 800);
    wrapper.style.backgroundImage = "linear-gradient(196deg, #f1a9a9, #e66767)";
});

color2.addEventListener("click", () => {
    charImage.src = "./images/chair2.png";
    charImage.classList.add("animate-class");
    setTimeout(() => {
        charImage.classList.remove("animate-class");
    }, 800);
    wrapper.style.backgroundImage = "linear-gradient(196deg, #4c4c4c, #262626)";
});

color3.addEventListener("click", () => {
    charImage.src = "./images/chair3.png";
    charImage.classList.add("animate-class");
    setTimeout(() => {
        charImage.classList.remove("animate-class");
    }, 800);
    wrapper.style.backgroundImage = "linear-gradient(196deg, #8a9fb2, #5f7991)";
});

color4.addEventListener("click", () => {
    charImage.src = "./images/chair4.png";
    charImage.classList.add("animate-class");
    setTimeout(() => {
        charImage.classList.remove("animate-class");
    }, 800);
    wrapper.style.backgroundImage = "linear-gradient(196deg, #97afc3, #6789a7)";
});

color5.addEventListener("click", () => {
    charImage.src = "./images/chair5.png";
    charImage.classList.add("animate-class");
    setTimeout(() => {
        charImage.classList.remove("animate-class");
    }, 800);
    wrapper.style.backgroundImage = "linear-gradient(196deg, #afa6a0, #8c7f76)";
});

color6.addEventListener("click", () => {
    charImage.src = "./images/chair6.png";
    charImage.classList.add("animate-class");
    setTimeout(() => {
        charImage.classList.remove("animate-class");
    }, 800);
    wrapper.style.backgroundImage = "linear-gradient(196deg, #aaadac, #838786)";
});
