const cards = document.querySelectorAll(".project-card");
window.addEventListener("scroll", () => {
const trigger = window.innerHeight * 0.85;
cards.forEach(card => {
const top = card.getBoundingClientRect().top;
if(top < trigger){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}
});
});

const skills = document.querySelectorAll(".skill-card");
function showSkills(){
const trigger = window.innerHeight * 0.85;
skills.forEach(skill => {
const top = skill.getBoundingClientRect().top;
if(top < trigger){
skill.style.opacity = "1";
skill.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll", showSkills);
showSkills();


const words = ["Web Developer", "Frontend Developer", "Software Engineering Student"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function typingEffect(){
if(wordIndex === words.length){
wordIndex = 0;
}

currentWord = words[wordIndex];
currentLetters = currentWord.slice(0, ++letterIndex);

document.getElementById("typing").textContent = currentLetters;

if(currentLetters.length === currentWord.length){
wordIndex++;
letterIndex = 0;
setTimeout(typingEffect,1500);

}else{
setTimeout(typingEffect,80);
}
}
typingEffect();

const navbar = document.querySelector(".navbar");
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
scrollBtn.style.display = "block";
}else{
navbar.classList.remove("scrolled");
scrollBtn.style.display = "none";
}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
form.addEventListener("submit",(e)=>{
e.preventDefault();
message.textContent = "Message sent successfully!";
form.reset();

});

